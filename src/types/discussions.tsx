export interface AttachmentType {
    id: number;
    attachment: string;
    size: number;
    original_name: string;
    created_at: string;
  }
  
  export interface DiscussionType {
    id: number;
    title: string;
    description: string;
    attachments: AttachmentType[];
    are_replies_allowed: boolean;
    are_likes_allowed: boolean;
    is_published: boolean;
    published_at: string;
    published_until: string;
    replies_count: number;
    likes_count: number;
    created_at: string;
    assign_to: any[];
  }
  
  export interface LinksType {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  }
  
  export interface MetaLinkType {
    url: string | null;
    label: string;
    active: boolean;
  }
  
  export interface MetaType {
    current_page: number;
    from: number;
    last_page: number;
    links: MetaLinkType[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  }
  
  export interface ResponseType {
    data: DiscussionType[];
    links: LinksType;
    meta: MetaType;
  }
  