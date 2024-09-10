import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./use-auth";

type paramsType = {
  queryKey?: any[];
  url: string;
  options?: {
    headers: {};
  };
  queryOptions?: any;
  initialData?: any;
};

const useFetchQuery = <T>({
  queryKey = [],
  url,
  options = {
    headers: {},
  },
  queryOptions = {},
  initialData = null,
}: paramsType) => {
  const { token, endPointUrl, logout } = useAuth();
  console.log("initialData", initialData);
  const allUrl = new URL(endPointUrl + url);
  const allParams = Array.from(allUrl?.searchParams?.values());

  const filteredSearchParams = new URLSearchParams(
    Array.from(allUrl.searchParams.entries()).filter(
      ([key, value]) =>
        value !== undefined &&
        value !== "" &&
        value !== "undefined" &&
        value !== "null"
    )
  );
  allUrl.search = filteredSearchParams.toString();

  const fetchData = async () => {
    const headers = {
      ...options.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get(allUrl.toString(), {
        ...options,
        headers,
      });
      return response.data;
    } catch (error: any) {
      if (error?.response?.status === 401) {
        logout();
      }
      throw error;
    }
  };

  const query = useQuery<T>({
    queryKey: [...queryKey, endPointUrl, ...allParams],
    queryFn: fetchData,
    ...(initialData ? { initialData } : {}),
    ...queryOptions,
    enabled:
      Boolean(token) && Boolean(endPointUrl) && queryOptions?.enabled !== false,
  });

  const { isLoading, isError, isFetching, data, error, refetch, ...rest } =
    query;

  return {
    isLoading,
    isError,
    isFetching,
    data,
    error,
    refetch,
    ...rest,
  };
};

export default useFetchQuery;
