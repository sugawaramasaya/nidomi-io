import { create } from "zustand";

export const usePostImageStore = create<{
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
}>((set) => ({
  imageFile: null,
  setImageFile: (file) => set({ imageFile: file }),
}));
