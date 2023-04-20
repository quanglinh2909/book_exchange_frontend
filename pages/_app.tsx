import store from "@/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

import { AppProps } from "next/app";
import LoadingComponent from "@/components/common/loading";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  //get redux store

  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Component {...pageProps} />
        <LoadingComponent />
      </SnackbarProvider>
    </Provider>
  );
}
