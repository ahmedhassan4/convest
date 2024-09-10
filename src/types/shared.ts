export interface CalendarEvent {
  id?: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  title: string;
  description?: string;
  location?: string;
}


export interface UserSelectType {
  value: number;
  label: string;
}

export interface CalendarEvent {
  id?: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  title: string;
  description?: string;
  location?: string;
}

export type EventType = {
  name: any;
  id: number;
  start_time: string; // ISO date string
  end_time: string; // ISO date string
  subject: string;
  color: [number, number, number]; // RGB tuple
};

export type EventDataType = {
  data: EventType[];
};

export interface selectOptionType {
  label: string;
  value:  number;
}

// Define a type for each role
interface RoleType {
  id: number;
  name: string;
}

// Define the data structure type
interface DataType {
  data: RoleType[];
}