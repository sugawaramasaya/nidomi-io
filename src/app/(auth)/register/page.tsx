"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import nidomy from "@/assets/nidomy/nidomy.png";
import LogoSvg from "@/assets/logo.svg";
import FixedBottomContainer from "@/components/FixedBottomContainer";

export default function RegisterPage() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="w-full max-w-[480px] flex flex-col items-center h-screen">
        {/* ロゴ・nidomy画像を縦flexで並べる。下部ブロック分スペースを空ける */}
        <div className="flex flex-col w-full items-center flex-1 min-h-0 pb-[300px]">
          {/* ロゴ */}
          <div className="w-full flex justify-center items-center pt-[24px] px-[24px] z-20">
            <div className="w-full aspect-[100/18]">
              <LogoSvg className="w-full h-full block" />
            </div>
          </div>
          {/* nidomy画像を中央配置 */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="aspect-square flex justify-center items-center w-full">
              <Image
                src={nidomy.src}
                alt="nidomy graphic"
                width={256}
                height={256}
                priority
                className="aspect-square"
              />
            </div>
          </div>
        </div>
        {/* メインフォーム＋ログインボタンを下部固定の1ブロックにまとめる */}
        <FixedBottomContainer className="px-[16px] gap-[24px] bg-white text-black">
          <div className="flex flex-col items-stretch w-full gap-[12px]">
            {/* Googleで登録ボタン */}
            <Button fullWidth variant="primary">
              Googleで登録
            </Button>
            {/* または */}
            <div className="text-center text-sm text-gray-500">または</div>
            {/* メール登録ボタン */}
            <Button fullWidth variant="secondary">
              メールで登録
            </Button>
          </div>
        </FixedBottomContainer>
      </div>
    </div>
  );
}
