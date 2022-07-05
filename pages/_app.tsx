import Head from "next/head";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Meu blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header />

      <main className="my-6 mx-auto p-6 bg-white sm:shadow-lg rounded prose lg:prose-xl">
        <Component {...pageProps} />
     </main>

     <Footer />
    </>
  );
}

export default MyApp