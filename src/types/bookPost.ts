export interface BookPost {
  id: string;
  uid: string;
  title: string;
  message?: string;
  tags?: string[];
  imageUrls: string[];
  createdAt: any; // Firestore Timestamp
  userId: string;
}
