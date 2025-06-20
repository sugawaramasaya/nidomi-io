export interface BookPost {
  id: string;
  imageUrls: string[];
  title: string;
  comment: string;
  tags?: string[];
  userId: string;
  createdAt?: any; // Timestamp型でもOK
}
