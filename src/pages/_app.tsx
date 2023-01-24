import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import BlogAuthor from "@/components/BlogAuthor";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className="max-w-xl mx-auto">
			<Navbar />
			<BlogAuthor />
			<Component {...pageProps} />
		</main>
	);
}
