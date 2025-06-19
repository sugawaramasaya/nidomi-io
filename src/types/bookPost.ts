export interface BookPost {
  id: string;
  title: string;
  comment?: string;
  tags?: string[];
  imageUrls: string[];
  createdAt: any; // Firestore Timestamp
  userId: string;
}
