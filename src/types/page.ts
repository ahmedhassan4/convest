// Define the type for a single page object
export type Page = {
    id: number;
    title: string;
    is_published: boolean;
    published_at: string | null;
    last_update: string;
  };
  
  // Define the type for the links related to pagination
  export type PaginationLinks = {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  
  // Define the type for the meta information of pagination
  export type PaginationMeta = {
    current_page: number;
    from: number;
    last_page: number;
    links: { url: string | null; label: string; active: boolean }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
  
  // Define the type for the full response data
  export type PageData = {
    data: Page[];
    links: PaginationLinks;
    meta: PaginationMeta;
  };
  