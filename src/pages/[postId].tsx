import axiosInstance from "@/axiosInstance";
import useBlog from "@/hooks/useBlog";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BlogPage = () => {
	const router = useRouter();
	const { postId } = router.query;
	const [blog, setBlog] = useState<any>({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (postId) {
			axiosInstance
				.get("/posts/" + postId)
				.then((res) => {
					setIsLoading(false);
					setBlog(res.data);
				})
				.catch((err) => {
					setIsError(true);
				});
		}
	}, [postId]);

	if (isLoading) {
		return <p>loading...</p>;
	}

	if (isError) {
		return <p>fetch error</p>;
	}

	return (
		<section className="mt-16 space-y-4">
			<h1 className="text-pink text-2xl font-extrabold">{blog?.title}</h1>
			<p>{blog?.body}</p>
		</section>
	);
};

export default BlogPage;
