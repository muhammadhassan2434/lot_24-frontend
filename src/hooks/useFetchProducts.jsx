import { useQuery } from "@tanstack/react-query";

const useFetchProducts = (queryKey, queryFn) => {
    return useQuery({
        queryKey,
        queryFn,
        onSuccess: (response) => {
            if (response?.status !== "success" || !Array.isArray(response.data)) {
                console.error("Unexpected API response format", response);
            }
            console.log(response);
        },
        onError: (error) => {
            console.error(`Error fetching ${queryKey}:`, error);
        },

        select: (response) => response?.data || [], // Extract data or fallback to []
    });
};

export default useFetchProducts;
