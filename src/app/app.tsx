import type { AppProps } from "next/app";

export function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="modal-root" />
      <Component {...pageProps} />
    </>
  );
}
