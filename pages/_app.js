import "@/styles/globals.css";
import "react-image-crop/dist/ReactCrop.css";
import  { Toaster } from 'react-hot-toast';

import { Provider } from "react-redux";
import { store } from "@/app/store";

import "/src/i18n";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Component {...pageProps} />
        <Toaster />
      </Provider>
    </div>
  );
}
