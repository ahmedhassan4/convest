export interface ChatDetailsType {
  data: {
    room_id: number | null;
    can_chat: boolean;
  };
}

export interface StudentType {
  id: number;
  full_name: string;
  avatar: string;
  role: string;
  login_code: string;
  major: string | null;
  chat_details: ChatDetailsType;
}

export interface UserType {
  id: number;
  full_name: string;
  avatar: string;
  role: string;
  login_code: string;
  major: string | null;
}

export interface AttachmentType {
  id: number;
  attachment: string;
  size: number;
  original_name: string;
  created_at: string;
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
  students: {
    first_four: StudentType[];
    remaining_count: number;
  };
  color: string;
  people: number[];
  users: UserType[];
  attachments: AttachmentType[];
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

export interface AnnouncementResponseType {
  data: AnnouncementType[];
  links: LinksType;
  meta: MetaType;
}
