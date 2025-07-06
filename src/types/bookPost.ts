import { Timestamp } from "firebase/firestore";

export interface BookPost {
  id: string;
  imageUrls: string[];
  title: string;
  comment: string;
  tags?: string[];
  userId: string;
  createdAt?: Timestamp;
}
