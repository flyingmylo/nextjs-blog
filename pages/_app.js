// pages/_app.js
import App from "next/app"
// import "../styles/base.scss"
import MainLayout from "../components/layout/main"
class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props

		return (
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		)
	}
}

export default MyApp
