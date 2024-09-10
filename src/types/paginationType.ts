export type PaginationResponseType<T = unknown> = {
    data: T[];
    meta: {
      current_page: number;
      from: number;
      last_page: number;
      links: [
        {
          url: string | null;
          label: "&laquo; Previous";
          active: false;
        },
        {
          url: string | null;
          label: "1";
          active: boolean;
        },
        {
          url: string | null;
          label: "2";
          active: boolean;
        },
        {
          url: string | null;
          label: "Next &raquo;";
          active: boolean;
        },
      ];
      path: string;
      per_page: number;
      to: number;
      total: number;
    };
  };
  