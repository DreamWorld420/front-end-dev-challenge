import Image from "next/image";

const BlogAuthor = () => {
	return (
		<section className="w-full flex justify-start mt-8">
			<section className="flex space-x-8">
				<section className="rounded">
					<Image
						src="/public/images/profile1.jpg"
						alt="author profile"
						width={32}
						height={32}
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
