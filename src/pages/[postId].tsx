import useBlogPost from "@/hooks/useBlogPost";
import { useRouter } from "next/router";

const BlogPage = () => {
	const router = useRouter();
	const { postId } = router.query;
	const [data, isLoading, isError] = useBlogPost(postId);

	if (isLoading) {
		return <p>loading...</p>;
	}

	if (isError) {
		return <p>fetch error</p>;
	}

	return (
		<section className="mt-16 space-y-4">
			<h1 className="text-pink text-2xl font-extrabold">{data.title}</h1>
			<p>{data.body}</p>
		</section>
	);
};

export default BlogPage;
