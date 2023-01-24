import Navbar from "@/components/Navbar";
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
		<>
			<Navbar isInPostPage />

			<section className="space-y-4 mt-20">
				<h1 className="text-white text-4xl font-extrabold mb-8">
					{data.title}
				</h1>
				<p>{new Date().toDateString()}</p>
				<p>{data.body}</p>
			</section>
		</>
	);
};

export default BlogPage;
