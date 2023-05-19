import { AuthorPayload, CategoryPayload } from "@/models/general";
import axiosClient from "./axios-client";

export const HomeApi = {
  getListNewBooks() {
    return axiosClient.get("/topbook");
  },
  getListBookCategory() {
    return axiosClient.get("/topbookCategory");
  },
};
