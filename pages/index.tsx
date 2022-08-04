import Head from "next/head"
import { isObject, deepCopy } from "../utils"

export default function Home() {
	const style: Style = {
		container: {
			margin: "0 auto",
			height: "600px",
			display: "flex",
			flexDirection: "column",
			background: "#fafafa",
		},

		title: {
			color: "forestgreen",
		},
	}

	return (
		<div style={style.container}>
			<Head>
				<title>hi</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 style={style.title}>
					Welcome to <a href="https://flyingmylo.com">flyingmylo</a>
				</h1>
			</main>

			<footer></footer>
		</div>
	)

	type Style = {
		container: object
		title: object
	}
}
