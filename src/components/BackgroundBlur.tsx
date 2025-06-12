import React from "react";

export type BackgroundBlurProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * 画面全体を覆う背景ぼかし（Appleマテリアル風）
 * - 子要素は中央配置
 */
const BackgroundBlur: React.FC<BackgroundBlurProps> = ({
  children,
  onClick,
  zIndex = 1000,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={[
        "fixed inset-0 w-[100vw] h-[100vh] flex items-center justify-center",
        className
      ].join(" ")}
      style={{
        zIndex,
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        ...style
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BackgroundBlur;
