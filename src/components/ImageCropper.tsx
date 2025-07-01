"use client";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Button from "@/components/Button";

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
    <div className="fixed inset-0 z-50 bg-surface flex flex-col">
      <div className="flex-1 flex flex-col p-4">
        <h3
          className="mb-4 text-center"
          style={{
            fontFamily: "var(--font-family-base)",
            fontSize: "var(--font-size-large)",
            lineHeight: "var(--line-height-large)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--on-surface)",
          }}
        >
          画像をトリミング
        </h3>

        <div className="flex-1 relative w-full mb-4">
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

        <div className="mb-4">
          <label
            className="block mb-2"
            style={{
              fontFamily: "var(--font-family-base)",
              fontSize: "var(--font-size-small)",
              lineHeight: "var(--line-height-small)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--on-surface)",
            }}
          >
            ズーム: {zoom.toFixed(2)}
          </label>
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full appearance-none cursor-pointer"
            style={{
              height: "32px",
              background: "transparent",
              outline: "none",
            }}
          />
        </div>

        <div className="flex space-x-2 mt-auto">
          <Button variant="secondary" onClick={onCancel} className="flex-1">
            キャンセル
          </Button>
          <Button
            variant="primary"
            onClick={handleCropComplete}
            className="flex-1"
          >
            完了
          </Button>
        </div>
      </div>
    </div>
  );
}
