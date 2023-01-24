const Footer = () => {
	return (
		<footer className="flex justify-between text-pink my-8">
			<section className="flex flex-row space-x-2">
				<p className="underline cursor-pointer">twitter</p>
				<p className="text-white">.</p>
				<p className="underline cursor-pointer">github</p>
				<p className="text-white">.</p>
				<p className="underline cursor-pointer">stack overflow</p>
			</section>
			<section className="underline cursor-pointer">rss</section>
		</footer>
	);
};

export default Footer;
