export type ChatDetailsType = {
  room_id: number | null;
  can_chat: boolean;
};

export type StudentType = {
  id: number;
  full_name: string;
  avatar: string;
  role: string;
  login_code: string;
  major: string | null;
  chat_details: {
    data: ChatDetailsType;
  };
};

export type SemesterType = {
  id: number;
  university_id: number;
  name: string;
  start_date: string;
  end_date: string;
  status: string | null;
  created_at: string;
  updated_at: string;
};

export type LatestSemesterDatesType = {
  start_date: string | null;
  end_date: string | null;
};

export type StudentsType = {
  first_four: StudentType[];
  remaining_count: number;
};

export type UniversityType = {
    id: number;
    name: string;
    logo: string;
    description: string;
    students: StudentsType;
    semesters: SemesterType[];
    latest_semester_dates: LatestSemesterDatesType;
    latest_semester?: string;
};

export type PaginationLinksType = {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
};

export type PaginationMetaType = {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type UniversitiesResponseType = {
  data: UniversityType[];
  links: PaginationLinksType;
  meta: PaginationMetaType;
};
