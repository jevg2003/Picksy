export interface Image {
  id: number;
  imgurId: string;
  deletehash: string;
  mimetype: string;
  width: number;
  height: number;
  size: number; // Size in bytes
  link: string; // URL of the image
  datetime: number; // Unix timestamp
  originalname: string; // Original file name
  isCover: boolean; // Indicates if this image is the cover image
}