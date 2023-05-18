import {
  AuthorPayload,
  CategoryPayload,
  CommentPayLoad,
  SearchPayLoad,
} from "@/models/general";
import axiosClient from "./axios-client";
import axios from "axios";

export const generalApi = {
  createAuthor(payload: AuthorPayload) {
    return axiosClient.post("/author/create", payload);
  },
  profile() {
    return axiosClient.get("/users/profile");
  },
  getAllAuthor() {
    return axiosClient.get("/author/getAll");
  },
  getAllUser() {
    return axiosClient.get("/users/getAll");
  },
  getAllBook() {
    return axiosClient.get("/books/getAll");
  },
  getAllBookUser(idUser: string) {
    return axiosClient.get("/books/getAll/" + idUser);
  },
  getAllCategory() {
    return axiosClient.get("/category/getAll");
  },
  createCategory(payload: CategoryPayload) {
    return axiosClient.post("/category/create", payload);
  },
  createBook(payload: FormData) {
    return axios.post("/api/books/create", payload);
  },
  updateCategory(payload: CategoryPayload) {
    return axiosClient.post("/category/update", payload);
  },
  updateAuthor(payload: AuthorPayload) {
    return axiosClient.post("/author/update", payload);
  },
  deleteCategory(id: string) {
    return axiosClient.delete("/category/delete/" + id);
  },
  deleteAuthor(id: string) {
    return axiosClient.delete("/author/delete/" + id);
  },
  search(payload: SearchPayLoad) {
    return axiosClient.post("/search/", payload);
  },
  getBook(idBook: number) {
    return axiosClient.get("/book/get/" + idBook);
  },
  createComment(payload: CommentPayLoad) {
    return axiosClient.post("/comment/create", payload);
  },
  getComments(idBook: number) {
    return axiosClient.get("/comment/" + idBook);
  },
  favorite(idBook: string) {
    return axiosClient.put("/book/favorite/" + idBook);
  },
  unfavorite(idBook: string) {
    return axiosClient.put("/book/unfavorite/" + idBook);
  },
  getListBookAuthor() {
    return axiosClient.get("/topBookAuthor");
  },
  createNotify(payload: any) {
    return axiosClient.post("/notify/create", payload);
  },
  read(idNotify: string) {
    return axiosClient.put("/notify/" + idNotify);
  },
  getAllNotify(idUser: string) {
    return axiosClient.get("/notify/get/" + idUser);
  },
};
