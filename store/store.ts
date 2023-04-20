import { configureStore } from "@reduxjs/toolkit";
import projectReducers from "./project/project-slice";
import loading from "./loading";

const rootReducer = {
  projects: projectReducers,
  loading: loading,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
