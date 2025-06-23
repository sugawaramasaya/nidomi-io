// components/PostFABMenu.tsx
import { useRouter } from "next/navigation";
import FAB from "@/components/FAB";
import Backdrop from "@/components/Backdrop";
import { useState } from "react";

import MenuIcon from "@/icons/size40/menu.svg";
import AddIcon from "@/icons/size40/add.svg";
import HomeIcon from "@/icons/size40/home-outlined.svg";
import HeartIcon from "@/icons/size40/heart-outlined.svg";
import SettingIcon from "@/icons/size40/setting.svg";
import UserIcon from "@/icons/size40/user-outlined.svg";

interface Props {
  screen?: "mypage" | "home";
}

export default function PostFABMenu({ screen = "mypage" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFAB = () => setIsOpen((prev) => !prev);
  const router = useRouter();

  return (
    <>
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}

      <div className="fixed bottom-[40px] right-[16px] z-50 flex flex-col items-end space-y-[20px]">
        {isOpen && (
          <>
            {screen === "mypage" ? (
              <>
                <FAB icon={<SettingIcon />} />
                <FAB icon={<HeartIcon />} />
                <FAB icon={<HomeIcon />} onClick={() => router.push("/home")} />
              </>
            ) : (
              <FAB icon={<UserIcon />} onClick={() => router.push("/mypage")} />
            )}
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
          onClick={toggleFAB}
        />
      </div>
    </>
  );
}
