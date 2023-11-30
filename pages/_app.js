import "@/styles/globals.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dark from "@/reducers/dark";

const store = configureStore({ reducer: { dark } });

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}