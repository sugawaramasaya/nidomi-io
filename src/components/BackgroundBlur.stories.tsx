import React from "react";
import BackgroundBlur from "./BackgroundBlur";
import IconButton from "./IconButton";
import Nidomy from "@/assets/nidomy/nidomy.png";
import MenuIcon from "@/icons/size40/menu.svg";
import CloseIcon from "@/icons/size40/close.svg";
import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BackgroundBlur> = {
  component: BackgroundBlur,
  title: "Components/BackgroundBlur",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const metaExport = meta;
export default metaExport;

type Story = StoryObj<typeof BackgroundBlur>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${Nidomy.src})`,
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}
    >
      <BackgroundBlur>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 40,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            paddingLeft: 16,
            paddingRight: 16,
            alignItems: "stretch",
          }}
        >
          <Button fullWidth>ボタン1</Button>
          <Button fullWidth>ボタン2</Button>
        </div>
      </BackgroundBlur>
    </div>
  ),
};

export const WithBackground = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${Nidomy.src})`,
      position: "fixed",
      inset: 0,
      zIndex: 0,
    }}
  >
    <BackgroundBlur />
  </div>
);

export const WithIcons = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${Nidomy.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "fixed",
      inset: 0,
      zIndex: 0,
    }}
  >
    <BackgroundBlur>
      <div
        style={{
          position: "absolute",
          right: 16,
          bottom: 40,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "flex-end",
        }}
      >
        <IconButton icon={<MenuIcon />} />
        <IconButton icon={<CloseIcon />} />
      </div>
    </BackgroundBlur>
  </div>
);

export const ClickToClose = () => {
  const [open, setOpen] = React.useState(true);
  return open ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${Nidomy.src})`,
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}
    >
      <BackgroundBlur onClick={() => setOpen(false)}>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
          }}
        >
          <h2
            style={{
              color: "#222",
              fontWeight: "var(--font-weight-bold)",
              fontSize: 24,
            }}
          >
            クリックで閉じる
          </h2>
          <p style={{ color: "#444", marginTop: 16 }}>
            背景をクリックすると消えます。
          </p>
        </div>
      </BackgroundBlur>
    </div>
  ) : (
    <button onClick={() => setOpen(true)}>再表示</button>
  );
};
