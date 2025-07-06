// components/PostFABMenu.tsx
"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePostImageStore } from "@/store/postImage";
import FAB from "@/components/FAB";
import Backdrop from "@/components/Backdrop";
import FixedBottomContainer from "@/components/FixedBottomContainer";
import Button from "./Button";
import MenuIcon from "@/icons/size40/menu.svg";
import AddIcon from "@/icons/size40/add.svg";
import HomeIcon from "@/icons/size40/home-outlined.svg";
import HeartIcon from "@/icons/size40/heart-outlined.svg";
import SettingIcon from "@/icons/size40/setting.svg";
import UserIcon from "@/icons/size40/user-outlined.svg";
import DeleteIcon from "@/icons/size40/delete.svg";
interface Props {
  screen?: "mypage" | "home";
  isSelecting?: boolean;
  onDeleteSelected?: () => void;
}

export default function PostFABMenu({
  screen = "mypage",
  isSelecting = false,
  onDeleteSelected,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const setImageFile = usePostImageStore((s) => s.setImageFile);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      router.push(`/mypage/post?from=${screen}`);
    }
  };

  const handlePickImage = (mode: "camera" | "gallery") => {
    if (inputRef.current) {
      if (mode === "camera") {
        inputRef.current.setAttribute("capture", "environment");
      } else {
        inputRef.current.removeAttribute("capture");
      }
      inputRef.current.click();
    }
  };

  const handleToggle = () => {
    if (!isSelecting) setIsOpen((prev: boolean) => !prev);
  };

  const handleAddClick = () => {
    setIsAddMode(true);
    setIsOpen(false);
  };

  return (
    <>
      {/* バックドロップ */}
      {!isSelecting && (isOpen || isAddMode) && (
        <Backdrop
          onClick={() => {
            setIsOpen(false);
            setIsAddMode(false);
          }}
        />
      )}

      {/* 非表示のinput */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* 追加モード時のボタン表示 */}
      {isAddMode && (
        <FixedBottomContainer withKeyboardAware>
          <Button
            variant="primary"
            fullWidth
            onClick={() => handlePickImage("camera")}
          >
            写真を撮る
          </Button>
          <Button
            variant="primary"
            fullWidth
            onClick={() => handlePickImage("gallery")}
          >
            画像を選択
          </Button>
        </FixedBottomContainer>
      )}

      {/* 通常FABメニュー群 */}
      <div className="fixed bottom-[40px] right-[16px] z-50 flex flex-col items-end space-y-[20px]">
        {isSelecting ? (
          <FAB
            icon={<DeleteIcon />}
            onClick={async () => {
              if (onDeleteSelected) {
                try {
                  await onDeleteSelected();
                } catch (error) {
                  console.error("🔥 Failed to delete selected posts:", error);
                }
              }
            }}
          />
        ) : (
          <>
            {!isAddMode && isOpen && screen === "mypage" && (
              <>
                <FAB
                  icon={<SettingIcon />}
                  onClick={() => router.push("/settings")}
                />
                <FAB icon={<HeartIcon />} />
                <FAB icon={<HomeIcon />} onClick={() => router.push("/home")} />
              </>
            )}
            {!isAddMode && isOpen && screen === "home" && (
              <FAB icon={<UserIcon />} onClick={() => router.push("/mypage")} />
            )}
            <FAB
              icon={
                isOpen ? <AddIcon onClick={handleAddClick} /> : <MenuIcon />
              }
              onClick={handleToggle}
            />
          </>
        )}
      </div>
    </>
  );
}
