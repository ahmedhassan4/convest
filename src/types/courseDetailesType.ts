export interface CourseDetailType {
    data: CourseDataType;
  }
  
  export interface CourseDataType {
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
    major_id: number;
    format: string;
    formatted_name: string;
    modules_count: number;
  }
  
  export interface ProfessorType {
    id: number;
    full_name: string;
    avatar: string;
    login_code: string;
    today: string;
    role: string;
  }
  
  export interface StudentsType {
    first_four: StudentType[];
    remaining_count: number;
  }
  
  export interface StudentType {
    // Assuming the structure is the same as in the previous example
    id: number;
    full_name: string;
    avatar: string;
    role: string;
    login_code: string;
  }
  
  export interface AssignmentsType {
    published: number;
    not_published: number;
  }
  