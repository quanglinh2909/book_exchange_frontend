import store from "@/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

import { AppProps } from "next/app";
import LoadingComponent from "@/components/common/loading";
import { SnackbarProvider } from "notistack";
import { AppPropsWithLayout } from "@/models";
import { EmptyLayout } from "@/components";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  //get redux store
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <LoadingComponent />
      </SnackbarProvider>
    </Provider>
  );
}
