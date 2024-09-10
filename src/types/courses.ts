export interface ProfessorType {
    id: number;
    full_name: string;
    avatar: string;
    login_code: string;
    today: string;
    role: string;
  }
  
  export interface StudentType {
    id: number;
    full_name: string;
    avatar: string;
    role: string;
    login_code: string;
    major: string | null;
    chat_details: {
      data: {
        room_id: string | null;
        can_chat: boolean;
      };
    };
  }
  
  export interface StudentsType {
    first_four: StudentType[];
    remaining_count: number;
  }
  
  export interface AssignmentsType {
    published: number;
    not_published: number;
  }
  
  export interface CourseType {
    major_id: string;
    format: string;
    id: number;
    name: string;
    code: string;
    color: string;
    description: string;
    semester_id: number;
    available_from: string;
    available_to: string;
    image: string;
    professor: ProfessorType;
    students: StudentsType;
    assignments: AssignmentsType;
  }
  
  export interface SemesterType {
    id: number;
    name: string;
    date: string;
    start_date: string;
    end_date: string;
    university_id: number;
    is_current: boolean;
    courses: CourseType[];
  }
  
  export interface SemestersResponseType {
    data: SemesterType[];
  }
  