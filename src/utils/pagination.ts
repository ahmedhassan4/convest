import { PaginationResponseType } from "@/types/paginationType";

export const getNextPageParam = (lastPage: PaginationResponseType | null) => {
  if (lastPage && lastPage?.meta?.current_page < lastPage?.meta?.last_page) {
    return lastPage.meta.current_page + 1;
  }
};

export const getPreviousPageParam = (firstPage: PaginationResponseType | null) => {
  if (firstPage && firstPage?.meta?.current_page > 1) {
    return firstPage?.meta?.current_page - 1;
  }
};
