export interface GradingType {
    id: number;
    name: string;
  }
  
  export interface MajorType {
    id: number;
    name: string;
    grading: GradingType;
  }
  
  export interface MajorsResponseType {
    data: MajorType[];
  }
  