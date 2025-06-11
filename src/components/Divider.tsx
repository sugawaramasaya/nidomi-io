import React from "react";

type DividerProps = {
  /**
   * 横幅（デフォルト100%。例: "100%", "320px" など）
   */
  width?: string | number;
  /**
   * 太さ（デフォルト1px）
   */
  thickness?: string | number;
  /**
   * 色（デフォルト: カラートークンのoutline-variant）
   */
  color?: string;
  /**
   * その他クラス名
   */
  className?: string;
};

const Divider: React.FC<DividerProps> = ({
  width = "100%",
  thickness = "1px",
  color = "#E0E0E0",
  className = "",
}) => (
  <hr
    className={className}
    style={{
      width: typeof width === "number" ? `${width}px` : width,
      border: "none",
      borderTop: `${thickness} solid ${color}`,
      background: "none",
      padding: 0,
    }}
    aria-hidden="true"
  />
);

export default Divider;