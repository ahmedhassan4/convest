import { FiEdit } from "react-icons/fi";
import { Button } from "rizzui";

const EditButton = ({ onClick, ...props }: { onClick: (e?: any) => void }) => {
  return (
    <Button
      onClick={onClick || (() => {})}
      variant="text"
      className="flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50">
      <FiEdit className="mr-2 h-5 w-5 text-gray-500" {...props} />
      Edit
    </Button>
  );
};
export default EditButton;
