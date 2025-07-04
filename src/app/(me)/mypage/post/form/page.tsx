"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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

  const handlePost = () => {
    // 投稿処理（仮）
    router.push("/mypage");
  };

  return (
    <div className="min-h-screen w-full max-w-[480px] mx-auto flex flex-col items-center">
      {/* 画像エリア */}
      <div className="flex-1 flex flex-col items-center justify-center relative pt-[48px] pb-[32px] bg-[var(--background)]">
        <img
          src={sampleImage}
          alt="投稿画像"
          className="w-[320px] h-[420px] object-contain rounded-lg shadow-xl mx-auto"
          style={{ boxShadow: "0 4px 24px 0 #00000026" }}
        />
        {/* 画像追加ボタン */}
        <div className="absolute right-[32px] bottom-[32px]">
          <IconButton icon={<PlusIcon />} />
        </div>
      </div>

      {/* 入力エリア */}
      <div className="w-full bg-[var(--surface)] rounded-t-[32px] px-[24px] pt-[32px] pb-[120px] flex flex-col gap-[32px]">
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
        {/* タグ */}
        <div>
          <Button variant="secondary" onClick={() => setShowTagDialog(true)}>
            タグ
          </Button>
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
