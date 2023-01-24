import axiosInstance from "@/axiosInstance";
import { useState, useEffect } from "react";

const useBlogPost = (query?: any) => {
	const [isLoading, setIsLoading] = useState<Boolean>(true);
	const [data, setData] = useState<any>([]);
	const [isError, setIsError] = useState<Boolean>(false);

	useEffect(() => {
		if (!query) return;

		axiosInstance
			.get(`/posts/${query}`)
			.then((res) => {
				setIsLoading(false);
				setData(res.data);
			})
			.catch((err) => {
				setIsError(true);
			});
	}, [query]);

	return [data, isLoading, isError];
};

export default useBlogPost;
