import React, { useRef, useEffect, useState } from "react";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import FixedBottomContainer from "@/components/FixedBottomContainer";
import IconButton from "@/components/IconButton";
import CloseIcon from "@/icons/size40/close.svg";
import TagDeleteButton from "@/components/TagDeleteButton";

interface TagDialogProps {
  onClose?: () => void;
  onAddTags?: (tags: string[]) => void;
  initialTags?: string[];
}

const TagDialog: React.FC<TagDialogProps> = ({ onClose, onAddTags, initialTags = [] }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  const [tags, setTags] = useState<string[]>(initialTags);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleAddTag();
        }
      };
      input.addEventListener("keydown", handleKeyDown);
      return () => input.removeEventListener("keydown", handleKeyDown);
    }
  }, [inputRef, input]);

  // タグ追加処理
  const handleAddTag = () => {
    if (!input.trim()) return;
    // カンマ区切りで分割し、空白除去・重複排除
    const newTags = input
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0 && !tags.includes(t));
    if (newTags.length === 0) return;
    setTags([...tags, ...newTags]);
    setInput("");
    inputRef.current?.focus();
  };

  // Enterキーで追加
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  // タグ削除
  const handleDeleteTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // onCloseが未指定なら何もしない関数を使う
  const handleClose = onClose || (() => {});

  return (
    <div className="fixed inset-0 z-50 bg-[var(--surface)] flex flex-col min-h-screen w-full max-w-[480px] mx-auto  gap-[24px]">
      {/* 閉じるボタン */}
      <div className="h-[64px] flex items-center px-[16px]">
        <IconButton icon={<CloseIcon />} onClick={handleClose} />
      </div>
      {/* メイン */}
      <div className="flex flex-col px-[24px]">
        <TextField
          label="タグ"
          value={input}
          onChange={setInput}
          placeholder=""
          inputRef={inputRef}
          helperText="カンマ区切り"
        />
      </div>
      <div className="flex flex-col px-[16px]">
        {/* タグリスト */}
        <div className="flex flex-col gap-[8px]">
          {tags.map((tag) => (
            <div key={tag} className="flex items-center">
              <TagDeleteButton
                label={tag}
                onClick={() => handleDeleteTag(tag)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* 追加ボタン */}
      <FixedBottomContainer>
        <Button
          variant="primary"
          fullWidth
          onClick={() => {
            // 最終的なタグリストを計算
            let finalTags = [...tags];
            
            // 入力中のタグがあれば追加
            if (input.trim()) {
              const newTags = input
                .split(",")
                .map((t) => t.trim())
                .filter((t) => t.length > 0 && !finalTags.includes(t));
              finalTags = [...finalTags, ...newTags];
            }
            
            // 全てのタグを親コンポーネントに渡す
            onAddTags?.(finalTags);
            // ダイアログを閉じる
            handleClose();
          }}
        >
          追加
        </Button>
      </FixedBottomContainer>
    </div>
  );
};

export default TagDialog;
