import React from "react";
import Head from "next/head";
// import { useRouter } from "next/router";
import NavBar from "./NavBar";

export default function ContainerBlock({ children, ...customMeta }, pageProps) {
  // const router = useRouter();

  const meta = {
    title: "Chris Rice: Developer Portfolio",
    description: `v2 of portfolio page, recreated using next.js and Chakra UI`,
    icon: "/gramophone-record.ico",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <link rel="icon" href={meta.icon} />
      </Head>
      <NavBar />
      <main position="relative">
        <div>{children}</div>
      </main>
    </>
  );
}
