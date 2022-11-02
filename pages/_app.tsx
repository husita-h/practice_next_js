import "../styles/globals.css"
import styles from "../styles/Home.module.css";
import type { AppProps } from "next/app"
import Head from "next/head";
import Header from "./components/template/header";
import Footer from "./components/template/footer";

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>HUSITA-H</title>
			<meta name="description" content="これはtestpageの説明文です" />
		</Head>
		<Header></Header>
		<Component {...pageProps} />
		<Footer></Footer>
	</>
);

export default App;
