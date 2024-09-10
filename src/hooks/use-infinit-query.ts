import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from './use-auth';

type ParamsType = {
  queryKey: any[];
  url: string;
  options?: {
    headers: Record<string, string>;
  };
  queryOptions?: any;
  initialData?: any;
  getNextPageParam?: (lastPage: any, allPages: any[]) => any;
};

const useInfiniteScrollQuery = ({
  queryKey,
  url,
  options = {
    headers: {},
  },
  queryOptions = {},
  initialData,
  getNextPageParam,
}: ParamsType) => {
  const { token, endPointUrl, logout } = useAuth();

  const fetchData = async ({ pageParam = 1 }) => {
    const allUrl = new URL(endPointUrl + url);
    const filteredSearchParams = new URLSearchParams(
      Array.from(allUrl.searchParams.entries()).filter(
        ([key, value]) =>
          value !== undefined && value !== '' && value !== 'undefined' && value !== 'null'
      )
    );
    filteredSearchParams.append('page', pageParam.toString());
    allUrl.search = filteredSearchParams.toString();

    const headers = {
      ...options.headers,
      'Content-Type': 'application/json',
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

  const query = useInfiniteQuery({
    queryKey: [...queryKey, endPointUrl],
    queryFn: fetchData,
    getNextPageParam,
    initialData: initialData ? {
      pages: [initialData],
      pageParams: [1],
    } : undefined,
    ...queryOptions,
    enabled:
      Boolean(token) && Boolean(endPointUrl) && queryOptions?.enabled !== false,
  });

  const {
    isLoading,
    isError,
    isFetching,
    data,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...rest
  } = query;

  return {
    isLoading,
    isError,
    isFetching,
    data,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...rest,
  };
};

export default useInfiniteScrollQuery;