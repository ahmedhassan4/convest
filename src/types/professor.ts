export interface UserType {
    id: number;
    full_name: string;
    avatar: string;
    login_code: string;
    today: string;
    role: string;
    first_name: string;
    last_name: string;
    email: string;
    dial_code: string;
    mobile: string;
    full_mobile: string;
    is_approved: boolean;
    major: string | null;
    university_id: number;
  }
  
  export interface LinkType {
    url: string | null;
    label: string;
    active: boolean;
  }
  
  export interface MetaType {
    current_page: number;
    from: number;
    last_page: number;
    links: LinkType[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  }
  
  export interface LinksType {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  }
  
  export interface UserResponseType {
    data: UserType[];
    links: LinksType;
    meta: MetaType;
  }
  