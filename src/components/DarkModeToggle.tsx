import { useDispatch } from "react-redux";
import { toggleMode } from "@/store/features/settings/settingsSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";

const DarkModeToggle = () => {
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
		<button
			onClick={() => dispatcher(toggleMode())}
			className="border rounded-full w-8 h-8 dark:border-white border-black font-mono"
		>
			{mode === "dark" ? "1" : "0"}
		</button>
	);
};

export default DarkModeToggle;
