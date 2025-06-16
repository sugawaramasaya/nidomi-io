// components/ImageCard.tsx
interface ImageCardProps {
  src: string;
}

export default function ImageCard({ src }: ImageCardProps) {
  return (
    <div className="relative w-full aspect-square">
      <img
        src={src}
        alt="Image card"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
