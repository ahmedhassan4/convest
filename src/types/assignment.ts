export interface ProfessorType {
    id: number;
    full_name: string;
    avatar: string;
    login_code: string;
    today: string;
    role: string;
}

export interface CourseType {
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
}

export interface AssignmentType {
    id: number;
    name: string;
    description: string;
    due_date: string;
    raw_due_date: string;
    raw_available_until: string;
    weight: number;
    course: CourseType;
    total: number;
    submission: any; // Adjust the type if you have more details on the submission object
    submissions_count: number;
    is_submitted: boolean;
    submission_status: string;
    can_submit: boolean;
    type: string;
}

export interface PaginationLinkType {
    url: string | null;
    label: string;
    active: boolean;
}

export interface MetaType {
    current_page: number;
    from: number;
    last_page: number;
    links: PaginationLinkType[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface AssignmentsResponseType {
    data: AssignmentType[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: MetaType;
}
