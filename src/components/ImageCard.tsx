import React from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt = "画像",
  className = "",
}) => {
  return (
    <div className={`relative aspect-square overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 33vw, 25vw"
      />
    </div>
  );
};

export default ImageCard;
