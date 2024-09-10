// Define the type for a single file or folder
export interface FileType {
    file: string;
    id: number;
    name: string;
    parent_id: number | null;
    course_id: number;
    type: string;
    size: number | null;
    created_at: string;
  }
  
  // Define the type for the links related to pagination
  export interface PaginationLinksType {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  }
  
  // Define the type for each pagination link object
  export interface PaginationLinkType {
    url: string | null;
    label: string;
    active: boolean;
  }
  
  // Define the type for the meta information of pagination
  export interface PaginationMetaType {
    current_page: number;
    from: number;
    last_page: number;
    links: PaginationLinkType[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  }
  
  // Define the type for the full response data
  export interface FileDataType {
    data: FileType[];
    links: PaginationLinksType;
    meta: PaginationMetaType;
  }