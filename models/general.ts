export interface AuthorPayload {
  id?: number;
  name: string;
  description: string;
}
export interface CategoryPayload {
  id?: number;
  name: string;
  description: string;
}
export interface SearchPayLoad {
  keyword: string;
}
export interface CommentPayLoad {
  content: string;
  idBook: number;
}
