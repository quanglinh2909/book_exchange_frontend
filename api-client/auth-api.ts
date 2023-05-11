import { UserLoginPayload, UserRegisterPayload } from "@/models/user";
import axiosClient from "./axios-client";
import { BookUploadPayload } from "@/models/book";

export const authApi = {
  login(payload: UserLoginPayload) {
    return axiosClient.post("/login", payload);
  },

  signUp(payload: UserRegisterPayload) {
    return axiosClient.post("/signup", payload);
  },
  upload(payload: BookUploadPayload){
    return axiosClient.post("/books/upload",payload)
  }
};
