import { useDispatch } from "react-redux";
import { toggleMode } from "@/store/features/settings/settingsSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";

const Navbar = () => {
	const dispatcher = useDispatch();

	const mode = useSelector((state: RootState) => state.settings.mode);

	useEffect(() => {
		if (mode === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [mode]);

	return (
		<nav className="flex justify-between mt-8">
			<h1 className="font-extrabold text-4xl">Overreacted</h1>
			<button onClick={() => dispatcher(toggleMode())}>toggle</button>
		</nav>
	);
};

export default Navbar;
