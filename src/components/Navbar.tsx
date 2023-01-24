import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

interface IProps {
	isInPostPage?: Boolean;
}

const Navbar: React.FC<IProps> = ({ isInPostPage }) => {
	const headerClassName = isInPostPage ? "text-2xl text-pink" : "text-4xl";

	return (
		<nav className="flex justify-between mt-8">
			<Link href="/">
				<h1 className={`font-extrabold ${headerClassName}`}>
					Overreacted
				</h1>
			</Link>
			<DarkModeToggle />
		</nav>
	);
};

Navbar.defaultProps = {
	isInPostPage: false,
};

export default Navbar;
