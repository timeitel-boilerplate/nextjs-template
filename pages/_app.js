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

function MyApp({ Component, pageProps }) {
  return <Component style={{ ...globals }} {...pageProps} />;
}

export default MyApp;
