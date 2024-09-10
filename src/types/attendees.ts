// Define the ChatDetailsType
export type ChatDetailsType = {
    room_id: number | null;
    can_chat: boolean;
  };
  
  // Define the AbsentType
  export type AbsentType = {
    id: number;
    full_name: string;
    avatar: string;
    chat_details: ChatDetailsType;
    login_code: string;
    major: string | null;
    role: string;
  };
  
  // Define the MainType that includes attendees and absents
  export type MainType = {
    attendees: AbsentType[]; // Assuming attendees is an empty array (can be updated based on actual data)
    absents: AbsentType[];
  };
  