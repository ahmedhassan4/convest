export type Notification = {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
    type: string;
    is_read: boolean;
    created_at_formatted: string;
    created_at_date: string;
    payload: any | null;
  };
  
  export type Link = {
    url: string | null;
    label: string;
    active: boolean;
  };
  
  export type Meta = {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
  
  export type NotificationsResponse = {
    data: Notification[];
    links: {
      first: string;
      last: string;
      prev: string | null;
      next: string | null;
    };
    meta: Meta;
  };
  