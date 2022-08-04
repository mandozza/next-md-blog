import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../styles/global.css';

function App({ Component, pageProps }) {

  return (
		<>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
			<header>
				<NavBar />
			</header>
			<Component {...pageProps} />
      <Footer />
		</>
  );
}

export default App;
