import { AuthorPayload, CategoryPayload } from "@/models/general";
import axiosClient from "./axios-client";
import axios from "axios";

export const HomeApi = {
  getListNewBooks() {
    return axiosClient.get("/topbook");
  },
  getListBookCategory() {
    return axiosClient.get("/topbookCategory");
  },
}