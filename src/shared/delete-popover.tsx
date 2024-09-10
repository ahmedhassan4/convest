import { Title, Text, Button, Popover } from "rizzui";
import { PiTrashFill } from "react-icons/pi";
import TrashIcon from "@/componnets/icons/trash";
import cn from "@/utils/class-names";

type DeletePopoverProps = {
  title: string;
  description: string;
  onDelete: () => void;
  showText?: boolean;
  isLoading?: boolean;
};

export default function DeletePopover({
  title,
  description,
  onDelete,
  showText = false,
  isLoading = false,
}: DeletePopoverProps) {
  return (
    <Popover placement="left">
      <Popover.Trigger>
        <Button
          variant="text"
          className={cn(
            `flex gap-1 items-center justify-start px-2 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-50`,
            showText && "w-full"
          )}>
          <TrashIcon className="h-4 w-4" />
          {showText && "Delete"}
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        {({ setOpen }) => (
          <div className="w-56 pb-2 pt-1 text-left rtl:text-right">
            <Title
              as="h6"
              className="mb-0.5 flex items-start text-sm text-gray-700 sm:items-center">
              <PiTrashFill className="me-1 h-[17px] w-[17px]" /> {title}
            </Title>
            <Text className="mb-2 leading-relaxed text-gray-500">
              {description}
            </Text>
            <div className="flex items-center justify-end">
              <Button
                isLoading={isLoading}
                size="sm"
                className="me-1.5 h-7"
                onClick={onDelete}>
                Yes
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-7"
                onClick={() => setOpen(false)}>
                No
              </Button>
            </div>
          </div>
        )}
      </Popover.Content>
    </Popover>
  );
}
