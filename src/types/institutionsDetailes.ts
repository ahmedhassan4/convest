export interface CityType {
  id: number;
  name: string;
  country: CountryType;
}

export interface CountryType {
  id: number;
  name: string;
}

export interface StudentsType {
  first_four: any[];
  remaining_count: number;
}

export interface LatestSemesterDatesType {
  start_date: string | null;
  end_date: string | null;
}

export interface UniversityDataType {
  id: number;
  name: string;
  logo: string;
  description: string;
  students: StudentsType;
  semesters: any[];
  latest_semester_dates: LatestSemesterDatesType;
  address: string | null;
  contact_number: string | null;
  principle_name: string;
  signature_image: string;
  abbreviation: string;
  is_active: boolean;
  city: CityType;
}

export type UniversityResponseType = {
  data: UniversityDataType;
}