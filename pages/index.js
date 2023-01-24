import Head from "next/head";
import About from "../components/About";
import EbookSection from "../components/EbookSection";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Bangkoding</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <EbookSection />
      <Footer />
    </div>
  );
}
