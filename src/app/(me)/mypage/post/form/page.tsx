"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePostImageStore } from "@/store/postImage";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import FixedBottomContainer from "@/components/FixedBottomContainer";
import PlusIcon from "@/icons/size40/add.svg";
import TagDialog from "../TagDialog";

// 仮の画像URL
const sampleImage = "/sample-cropper.png";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [showTagDialog, setShowTagDialog] = useState(false);
  const router = useRouter();
  const croppedImage = usePostImageStore((s) => s.croppedImage);

  const handlePost = () => {
    // 投稿処理（仮）
    router.push("/mypage");
  };

  return (
    <div className="min-h-screen w-full max-w-[480px] mx-auto flex flex-col items-center">
      {/* 画像エリア */}
      <div className="w-full flex-1 flex flex-col items-center justify-center relative pb-[24px]">
        {croppedImage ? (
          <img
            src={URL.createObjectURL(croppedImage)}
            alt="投稿画像"
            className="w-full max-w-[480px] aspect-square object-contain mx-auto"
          />
        ) : (
          <div className="w-full max-w-[480px] aspect-square bg-gray-200 flex items-center justify-center text-gray-400">
            画像がありません
          </div>
        )}
        {/* 画像追加ボタン */}
        <div className="absolute right-[16px] bottom-[32px]">
          <IconButton icon={<PlusIcon />} />
        </div>
      </div>
      <div className="w-full pb-[120px] flex flex-col gap-[36px]">
        {/* 入力エリア */}
        <div className="w-full px-[24px] flex flex-col gap-[36px]">
          {/* タイトル */}
          <div>
            <TextField label="タイトル" value={title} onChange={setTitle} />
          </div>
          {/* ひとこと */}
          <div>
            <TextField
              label="ひとこと"
              value={description}
              maxLength={32}
              onChange={setDescription}
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          {/* タグ */}
          <div>
            <Button
              variant="text-secondary"
              onClick={() => setShowTagDialog(true)}
            >
              タグ
            </Button>
          </div>
        </div>
      </div>

      {/* 投稿ボタン（下部固定） */}
      <FixedBottomContainer>
        <Button variant="primary" fullWidth onClick={handlePost}>
          投稿
        </Button>
      </FixedBottomContainer>

      {/* タグ追加ダイアログ */}
      {showTagDialog && <TagDialog onClose={() => setShowTagDialog(false)} />}
    </div>
  );
};

export default PostForm;
