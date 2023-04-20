import { UserLoginPayload, UserRegisterPayload } from "@/models/user";
import axiosClient from "./axios-client";

export const authApi = {
  login(payload: UserLoginPayload) {
    return axiosClient.post("/login", payload);
  },

  signUp(payload: UserRegisterPayload) {
    return axiosClient.post("/signup", payload);
  },
};
