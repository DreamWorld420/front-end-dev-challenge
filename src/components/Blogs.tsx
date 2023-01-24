import useBlog from "@/hooks/useBlog";
import Link from "next/link";
import BlogItem from "./BlogItem";
import React from "react";

const Blogs = () => {
	const [blogs, isLoading, isError] = useBlog("/posts");

	if (isLoading) {
		return <p>loading...</p>;
	}

	if (isError) {
		return <p>fetch error</p>;
	}

	return (
		<section className="space-y-16 mt-16">
			{blogs
				.sort((first: any, second: any) =>
					first.id < second.id ? -1 : 1
				)
				.map((item: any) => {
					return (
						<React.Fragment key={item.id}>
							<BlogItem title={item.title} id={item.id}>
								{item.body}
							</BlogItem>
						</React.Fragment>
					);
				})}
		</section>
	);
};

export default Blogs;
