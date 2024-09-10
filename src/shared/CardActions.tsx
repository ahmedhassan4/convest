import SharedPopover from "@/shared/popover";
import { FiEdit } from "react-icons/fi";
import { PiDotsThreeVerticalBold, PiTrashSimple } from "react-icons/pi";
import { ActionIcon, Button, Title } from "rizzui";

const CardActions = ({
  title,
  deleteAction,
  isPending,
  editeAction
}: {
  title: string;
  deleteAction: () => void;
  isPending: boolean;
  editeAction: () => void
}) => {
  return (
    <SharedPopover
      triggerButton={
        <ActionIcon
          className="ms-auto bg-white"
          size="sm"
          variant="outline"
          rounded="lg">
          <PiDotsThreeVerticalBold className="size-4" />
        </ActionIcon>
      }>
      {({ setOpen }) => (
        <div className="text-gray-900">
          <Button
            onClick={editeAction}
            variant="text"
            className="flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50">
            <FiEdit className="mr-2 h-5 w-5 text-gray-500" />
            Edit
          </Button>
          <SharedPopover
            triggerButton={
              <Button
                variant="text"
                className="flex w-full items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50">
                <PiTrashSimple className="mr-2 h-5 w-5 text-gray-500" />
                Delete
              </Button>
            }>
            {({ setOpen: setDeleteOpen }) => (
              <div className="w-56">
                <Title as="h6">Delete the {title}</Title>
                <p>Are you sure you want to delete this {title}?</p>
                <div className="flex justify-end gap-3 mb-1">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setDeleteOpen(false)}>
                    No
                  </Button>
                  <Button
                    isLoading={isPending}
                    size="sm"
                    onClick={deleteAction}>
                    Yes
                  </Button>
                </div>
              </div>
            )}
          </SharedPopover>
        </div>
      )}
    </SharedPopover>
  );
};

export default CardActions;
