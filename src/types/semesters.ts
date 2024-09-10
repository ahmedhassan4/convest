export type SemesterDataType = {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    status: string | null;
  };
  
  export type LinksType = {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  
  export type MetaLinksType = {
    url: string | null;
    label: string;
    active: boolean;
  };
  
  export type MetaType = {
    current_page: number;
    from: number;
    last_page: number;
    links: MetaLinksType[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
  
  export type SemestersResponseType = {
    data: SemesterDataType[];
    links: LinksType;
    meta: MetaType;
  };
  