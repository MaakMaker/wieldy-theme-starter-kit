import "styles/styles.min.css";

import Head from "next/head";

function Page({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wieldy- Admin Dashboard</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Page;
