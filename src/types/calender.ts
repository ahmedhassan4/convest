export interface DataType {
    id: number;
    encrypted_id: string;
    courses: CourseType[];
    type: EventTypeType;
    professor: ProfessorType;
    location: string;
    first_four_students: StudentType[];
    remaining_people_count: number;
    title: string;
    description: string;
    date: string;
    start_time: string;
    end_time: string;
    formatted_date: string;
    formatted_time: string;
    can_repeat: boolean;
    parent_id: number | null;
    repeat: boolean;
    can_check_in: boolean;
    need_user_location: boolean;
    assign_all: boolean;
    lat: number | null;
    long: number | null;
    last_updated_location: string | null;
    people: PersonType[];
    users: UserType[];
  }
  
  export interface CourseType {
    // Define the properties of the Course here if needed
    id: number;
  }
  
  export interface EventTypeType {
    id: number;
    name: string;
  }
  
  export interface ProfessorType {
    id: number;
    full_name: string;
    avatar: string;
    login_code: string;
    today: string;
    role: string;
  }
  
  export interface StudentType {
    // Define the properties of the Student here if needed
  }
  
  export interface PersonType {
    // Define the properties of the Person here if needed
  }
  
  export interface UserType {
    // Define the properties of the User here if needed
  }
  
  export interface RootObjectType {
    data: DataType;
  }
  