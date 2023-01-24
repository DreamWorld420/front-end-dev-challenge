import Link from "next/link";
import { FC } from "react";

interface IProps {
	title: String;
	children: React.ReactNode;
	id: String;
}

const BlogItem: FC<IProps> = ({ title, children, id }) => {
	return (
		<article className="space-y-4">
			<Link href={`/${id}`}>
				<h2 className="font-bold text-pink text-3xl">{title}</h2>
			</Link>
			<main>
				<p>{new Date().toDateString()}</p>
				<p>{children}</p>
			</main>
		</article>
	);
};

export default BlogItem;
