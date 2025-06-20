"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageCard from "@/components/ImageCard";
import FAB from "@/components/FAB";
import Backdrop from "@/components/Backdrop";
import MenuIcon from "@/icons/size40/menu.svg";
import AddIcon from "@/icons/size40/add.svg";
import UserIcon from "@/icons/size40/user-outlined.svg";

const images = Array.from(
  { length: 24 },
  (_, i) => `https://placehold.co/160x160?text=${i + 1}`
);

export default function ExamplePage() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // useRouterを初期化
  const toggleFAB = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative w-full min-h-screen bg-[color:var(--surface)]">
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-0">
        {images.map((src, index) => (
          <ImageCard key={index} src={src} />
        ))}
      </div>

      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}

      <div className="fixed bottom-[40px] right-[16px] z-50 flex flex-col items-end space-y-[20px]">
        {/* FABボタンをタップすると/mypageへ遷移 */}
        {isOpen && (
          <FAB
            icon={<UserIcon />}
            onClick={() => router.push("/mypage")} // 遷移処理を追加
          />
        )}
        <FAB icon={isOpen ? <AddIcon /> : <MenuIcon />} onClick={toggleFAB} />
      </div>
    </div>
  );
}
