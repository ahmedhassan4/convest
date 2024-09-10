export interface ChatDetailsType {
    room_id: number | null;
    can_chat: boolean;
  }
  
  export interface UserType {
    id: number;
    full_name: string;
    avatar: string;
    role: string;
    login_code: string;
    major: string | null;
    chat_details: {
      data: ChatDetailsType;
    };
  }
  
  export interface AttachmentType {
    id: number;
    attachment: string;
    size: number;
    original_name: string;
    created_at: string;
  }
  
  export interface StudentsType {
    first_four: UserType[];
    remaining_count: number;
  }
  
  export interface AnnouncementType {
    id: number;
    course_id: number;
    title: string;
    are_replies_allowed: boolean;
    are_likes_allowed: boolean;
    likes_count: number;
    replies_count: number;
    is_liked: boolean;
    created_at: string;
    raw_created_at: string;
    user: UserType;
    description: string;
    students: StudentsType;
    color: string;
    people: any[]; // Assuming this is an empty array; you can refine this based on your actual data.
    users: any[]; // Assuming this is an empty array; you can refine this based on your actual data.
    attachments: AttachmentType[];
  }
  
  export interface PaginationLinkType {
    url: string | null;
    label: string;
    active: boolean;
  }
  
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
  
  export interface AnnouncementsResponseType {
    data: AnnouncementType[];
    links: {
      first: string;
      last: string;
      prev: string | null;
      next: string | null;
    };
    meta: PaginationMetaType;
  }
  