import { AuthorPayload, CategoryPayload } from "@/models/general";
import axiosClient from "./axios-client";
import axios from "axios";

export const generalApi = {
  createAuthor(payload: AuthorPayload) {
    return axiosClient.post("/author/create", payload);
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
  getBookById(id:string){
    return axiosClient.get("/books/"+id)
  },
};
