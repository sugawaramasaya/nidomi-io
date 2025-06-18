import React, { ReactNode, useEffect, useState } from "react";

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

  const bottomPadding = withKeyboardAware
    ? isKeyboardOpen
      ? "pb-[var(--space-16)]"
      : "pb-[var(--space-40)]"
    : "pb-[var(--space-40)]";

  return (
    <div
      className={`
        fixed left-1/2 translate-x-[-50%] z-[1000]
        w-[calc(100%-var(--space-32))] max-w-[calc(480px-var(--space-32))]
        ${bottomPadding}
        ${className}
      `}
      style={{ bottom: 0 }}
    >
      <div className="w-full flex flex-col gap-[var(--space-20)]">
        {withKeyboardAware && isKeyboardOpen
          ? React.Children.toArray(children)[0]
          : children}
      </div>
    </div>
  );
};

export default FixedBottomContainer;
