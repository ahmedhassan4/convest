import cn from "../utils/class-names";
import { formatDate } from "../utils/format-date";

interface DateCellProps {
  date: Date;
  className?: string;
  dateFormat?: string;
  dateClassName?: string;
}

export default function DateCell({
  date,
  className,
  dateClassName,
  dateFormat = "MMMM D, YYYY",
}: DateCellProps) {
  return (
    <div className={cn("grid gap-1", className)}>
      <time
        dateTime={formatDate(date, "YYYY-MM-DD")}
        className={cn("font-medium text-gray-700", dateClassName)}
      >
        {formatDate(date, dateFormat)}
      </time>
    </div>
  );
}
