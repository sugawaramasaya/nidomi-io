"use client";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import FixedBottomContainer from "@/components/FixedBottomContainer";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import CloseIcon from "@/icons/size40/close.svg";

interface Point {
  x: number;
  y: number;
}

interface Area {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ImageCropperProps {
  image: string;
  onCropComplete: (croppedImage: File) => void;
  onCancel: () => void;
}

export default function ImageCropper({
  image,
  onCropComplete,
  onCancel,
}: ImageCropperProps) {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropChange = useCallback((crop: Point) => {
    setCrop(crop);
  }, []);

  const onCropAreaChange = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const onZoomChange = useCallback((zoom: number) => {
    setZoom(zoom);
  }, []);

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.src = url;
    });

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: Area
  ): Promise<File> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("No 2d context");
    }

    const maxSize = Math.max(pixelCrop.width, pixelCrop.height);
    canvas.width = maxSize;
    canvas.height = maxSize;

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "cropped-image.jpg", {
            type: "image/jpeg",
          });
          resolve(file);
        }
      }, "image/jpeg");
    });
  };

  const handleCropComplete = async () => {
    if (croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(image, croppedAreaPixels);
        onCropComplete(croppedImage);
      } catch (error) {
        console.error("Error cropping image:", error);
        alert("画像のトリミングに失敗しました。");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 modal-bg flex flex-col p-0 w-[100vw] h-[100vh]">
      {/* 上部バー */}
      <div className="absolute top-0 left-0 w-full h-[64px] flex items-center justify-between px-[16px] pt-[16px] z-10">
        <IconButton icon={<CloseIcon />} onClick={onCancel} />
      </div>

      {/* メインコンテンツエリア */}
      <div className="flex flex-1 items-center justify-center">
        {/* Cropperエリア */}
        <div className="relative w-full max-w-[480px] aspect-square bg-[var(--surface-dim)] overflow-hidden">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={onCropChange}
            onCropComplete={onCropAreaChange}
            onZoomChange={onZoomChange}
            showGrid={true}
            style={{
              containerStyle: {
                width: "100%",
                height: "100%",
                backgroundColor: "var(--surface-dim)",
              },
            }}
          />
        </div>
      </div>

      {/* 完了ボタン */}
      <FixedBottomContainer>
        <Button variant="primary" fullWidth onClick={handleCropComplete}>
          完了
        </Button>
      </FixedBottomContainer>
    </div>
  );
}
