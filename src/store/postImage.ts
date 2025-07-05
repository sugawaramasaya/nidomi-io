import { create } from "zustand";

export const usePostImageStore = create<{
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  croppedImage: string | null; // DataURL
  setCroppedImage: (dataUrl: string | null) => void;
  clearAll: () => void;
}>((set) => ({
  imageFile: null,
  setImageFile: (file) => set({ imageFile: file }),
  croppedImage: null,
  setCroppedImage: (dataUrl) => set({ croppedImage: dataUrl }),
  clearAll: () => set({ imageFile: null, croppedImage: null }),
}));
