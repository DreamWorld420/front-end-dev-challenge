import Image from "next/image";
import profile from "/public/images/profile1.jpg";

const BlogAuthor = () => {
	return (
		<section className="w-full flex justify-start mt-12">
			<section className="flex space-x-8">
				<section className="rounded-full w-14 h-14 relative">
					<Image
						src={profile}
						alt="author profile"
						fill
						className="rounded-full object-cover"
					/>
				</section>
				<section>
					<p>
						Personal blog by{" "}
						<span className="text-pink underline cursor-pointer">
							Dab Abramov
						</span>
						.
					</p>
					<p>I explain with words and code</p>
				</section>
			</section>
		</section>
	);
};

export default BlogAuthor;
