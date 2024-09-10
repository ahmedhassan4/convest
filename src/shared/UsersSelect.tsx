import { Text, Avatar, Button } from "rizzui";
import SimpleBar from "@/ui/simplebar";
import usePeopleInCourseData from "@/app/dashboard/users/usePeopleInCourseData";
import { useEffect, useState } from "react";
import { UserType } from "@/types/annoincements_list";

export default function UsersSelectModal({
  course_id,
  setSelectedUSers,
  selectedUsers,
}: {
  course_id: string | number;
  setSelectedUSers: any;
  selectedUsers: UserType[];
}) {
  const { data, isLoading } = usePeopleInCourseData({ course_id });
  const [selectedUsersState, setSelectedUsersState] = useState<UserType[]>([]);

  const handleSelectUser = (row: UserType) => {
    if (selectedUsersState?.some(user => user?.id === row?.id)) {
      setSelectedUsersState(
        selectedUsersState.filter(item => item?.id !== row.id)
      );
      setSelectedUSers(selectedUsersState.filter(item => item?.id !== row?.id));
    } else {
      setSelectedUsersState([...selectedUsersState, row]);
      setSelectedUSers([...selectedUsersState, row]);
    }
  };

  useEffect(() => {
    setSelectedUsersState(selectedUsers);
  }, []);

  return (
    <>
      <SimpleBar className="-mr-3 h-[400px] pr-3 md:h-[450px]">
        {data?.data?.map(item => (
          <UsersRow
            selectedUSers={selectedUsersState}
            row={item}
            key={item?.id}
            handleSelectUser={handleSelectUser}
          />
        ))}
      </SimpleBar>
    </>
  );
}

function UsersRow({
  row,
  selectedUSers,
  handleSelectUser,
}: {
  row: UserType;
  selectedUSers: UserType[]; // Updated type here as well
  handleSelectUser: (row: UserType) => void;
}) {
  const selected = selectedUSers?.some(user => user?.id === row?.id) || false;

  return (
    <div className="flex items-center justify-between pb-3 pt-2 lg:pb-5 lg:first:pt-4">
      <div className="flex items-center gap-2">
        <Avatar size="lg" name={row?.full_name} src={row?.avatar} />
        <Text className="font-lexend font-medium capitalize text-gray-900">
          {row?.full_name}
        </Text>
      </div>
      <Button
        size="sm"
        rounded="pill"
        variant={selected ? "solid" : "flat"}
        onClick={() => handleSelectUser(row)} // Ensure correct typing here
        className="font-medium capitalize md:h-9 md:px-4">
        {selected ? "Selected" : "Select"}
      </Button>
    </div>
  );
}
