import { configureStore } from "@reduxjs/toolkit";
import projectReducers from "./project/project-slice";
import loading from "./loading";
import user from "./user"
const rootReducer = {
  projects: projectReducers,
  loading: loading,
  user: user,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
