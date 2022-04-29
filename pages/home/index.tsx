import Head from "next/head";
import style from './index.module.scss'
import Header from "../../components/header";


export default function Home() {

	return (
		<div className={style.container}>
			<Head>
				<title>Mylo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className={style.title}>
					Welcome to <a href="https://flyingmylo.com">flyingmylo</a>
				</h1>
			</main>

			<footer>

			</footer>

		</div>
	);
}
