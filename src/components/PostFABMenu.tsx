// components/PostFABMenu.tsx
import { useState } from "react";
import { useRouter } from "next/navigation";
import FAB from "@/components/FAB";
import Backdrop from "@/components/Backdrop";
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
  const router = useRouter();

  const handleToggle = () => {
    if (!isSelecting) setIsOpen((prev: boolean) => !prev);
  };

  return (
    <>
      {!isSelecting && isOpen && <Backdrop onClick={() => setIsOpen(false)} />}

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
            {isOpen && screen === "mypage" && (
              <>
                <FAB
                  icon={<SettingIcon />}
                  onClick={() => router.push("/settings")}
                />
                <FAB icon={<HeartIcon />} />
                <FAB icon={<HomeIcon />} onClick={() => router.push("/home")} />
              </>
            )}
            {isOpen && screen === "home" && (
              <>
                <FAB
                  icon={<SettingIcon />}
                  onClick={() => router.push("/settings")}
                />
                <FAB
                  icon={<UserIcon />}
                  onClick={() => router.push("/mypage")}
                />
              </>
            )}
            <FAB
              icon={
                isOpen ? (
                  <AddIcon onClick={() => router.push("/mypage/post")} />
                ) : (
                  <MenuIcon />
                )
              }
              onClick={handleToggle}
            />
          </>
        )}
      </div>
    </>
  );
}
