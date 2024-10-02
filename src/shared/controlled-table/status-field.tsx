import { Select, type SelectProps, type SelectOption } from "rizzui";
import cn from "@/utils/class-names";

export default function StatusField({
  placeholder = "Select status",
  dropdownClassName,
  ...props
}: SelectProps<SelectOption>) {
  return (
    <Select
      inPortal={false}
      placeholder={placeholder}
      selectClassName="min-h-[40px] min-w-[150px]"
      dropdownClassName={cn("p-1.5 !z-0 min-h-[40px]", dropdownClassName)}
      optionClassName="min-h-[40px]"
      {...props}
    />
  );
}
