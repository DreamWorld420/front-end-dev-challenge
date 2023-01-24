import Navbar from "@/components/Navbar";
import BlogAuthor from "@/components/BlogAuthor";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

const Homepage = () => {
	return (
		<section>
			<Navbar />
			<BlogAuthor />
			<Blogs />
			<Footer />
		</section>
	);
};

export default Homepage;
