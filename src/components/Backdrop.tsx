// components/Backdrop.tsx
import React from "react";

interface BackdropProps {
  onClick?: () => void;
  className?: string;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick, className = "" }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/30 backdrop-blur-[12px] z-40 ${className}`}
      onClick={onClick}
      aria-hidden="true"
    />
  );
};

export default Backdrop;
