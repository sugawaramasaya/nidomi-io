import React, { useState } from "react";
import ImageCropper from "../components/ImageCropper";

const sampleImage = "/sample-cropper.jpg";

export default {
  title: "Components/ImageCropper",
  component: ImageCropper,
};

export const Default = () => {
  const [open, setOpen] = useState(true);

  if (!open) return <div>（完了 or キャンセルで非表示）</div>;

  return (
    <ImageCropper
      image={sampleImage}
      onCropComplete={(file) => {
        alert("トリミング完了: " + file.name);
        setOpen(false);
      }}
      onCancel={() => {
        alert("キャンセル");
        setOpen(false);
      }}
    />
  );
};
