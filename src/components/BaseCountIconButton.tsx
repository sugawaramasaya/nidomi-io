import React, { ReactNode, useState, useEffect } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  withKeyboardAware?: boolean;
}

const FixedBottomContainer: React.FC<Props> = ({
  children,
  className = "",
  withKeyboardAware = false,
}) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    if (!withKeyboardAware || typeof window === "undefined") return;

    const initialHeight = window.innerHeight;
    const onResize = () => {
      setIsKeyboardOpen(window.innerHeight < initialHeight - 100);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [withKeyboardAware]);

  const containerPaddingBottom = withKeyboardAware
    ? isKeyboardOpen
      ? "pb-[var(--space-16)]"
      : "pb-[var(--space-40)]"
    : "pb-[var(--space-40)]";

  const childrenArray = React.Children.toArray(children);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-[1000] ${containerPaddingBottom} ${className}`}
    >
      <div className="max-w-[480px] mx-auto px-[var(--space-16)] w-full">
        <div className="flex flex-col gap-[var(--space-20)]">
          {withKeyboardAware && isKeyboardOpen
            ? childrenArray.length > 0
              ? childrenArray[0]
              : null
            : children}
        </div>
      </div>
    </div>
  );
};

export default FixedBottomContainer;
