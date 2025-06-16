import React, { ReactNode } from "react";

const FixedBottomContainer: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white text-black shadow-lg ${className}`}
      style={{
        zIndex: 1000,
        padding: "16px",
        fontFamily: "Noto Sans JP, sans-serif",
        fontWeight: 700,
        fontSize: "21px",
        lineHeight: "28px",
        textAlign: "center",
        borderRadius: "16px",
      }}
    >
      <div className="container mx-auto px-4 py-2 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default FixedBottomContainer;
