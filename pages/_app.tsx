import type { AppProps } from "next/app";
import { FC } from "react";

const globals = {
  html: {
    padding: "0",
    margin: "0",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  body: {
    padding: "0",
    margin: "0",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  a: { color: "inherit", textDecoration: "none" },
  "": { boxSizing: "border-box" },
};

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component style={{ ...globals }} {...pageProps} />;
};

export default MyApp;
