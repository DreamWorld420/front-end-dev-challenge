import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import BlogAuthor from "@/components/BlogAuthor";
import type { AppProps } from "next/app";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<main className="max-w-xl mx-auto">
				<Navbar />
				<BlogAuthor />
				<Component {...pageProps} />
			</main>
		</Provider>
	);
}
