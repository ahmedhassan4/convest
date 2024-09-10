import { Popover } from "rizzui";

type PopoverPlacements =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end";

type PopoverContentProps = {
  setOpen: (isOpen: boolean) => void;
};

const SharedPopover = ({
  triggerButton,
  children,
  placement = "left",
  className = "",
}: {
  triggerButton: JSX.Element;
  children: (props: PopoverContentProps) => JSX.Element;
  placement?: PopoverPlacements;
  className?: string;
}) => {
  return (
    <Popover placement={placement}>
      <Popover.Trigger>{triggerButton}</Popover.Trigger>
      <Popover.Content className={`${className}`}>
        {(props: PopoverContentProps) => children(props)}
      </Popover.Content>
    </Popover>
  );
};

export default SharedPopover;