import axiosInstance from "@/axiosInstance";
import { useState, useEffect } from "react";

type BlogList = {
	id: Number;
	userId: Number;
	title: String;
	body: String;
}[];

const useBlog = () => {
	const [isLoading, setIsLoading] = useState<Boolean>(true);
	const [data, setData] = useState<any>([]);
	const [isError, setIsError] = useState<Boolean>(false);

	useEffect(() => {
		axiosInstance
			.get("/posts")
			.then((res) => {
				setIsLoading(false);
				setData(res.data);
			})
			.catch((err) => {
				setIsError(true);
			});
	}, []);

	return [data, isLoading, isError];
};

export default useBlog;
