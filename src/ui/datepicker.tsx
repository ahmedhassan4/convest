import { useState } from "react";
import { Input, InputProps, Text } from "rizzui";
import cn from "../utils/class-names";
import { PiCalendarBlank, PiCaretDownBold } from "react-icons/pi";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar, FiChevronDown } from "react-icons/fi";

const calendarContainerClasses = {
  base: "[&.react-datepicker]:shadow-lg [&.react-datepicker]:border-gray-100 [&.react-datepicker]:rounded-md",
  monthContainer: {
    padding: "[&.react-datepicker>div]:pt-5 [&.react-datepicker>div]:pb-3",
  },
};

const prevNextButtonClasses = {
  base: "[&.react-datepicker>button]:items-baseline [&.react-datepicker>button]:top-7",
  border:
    "[&.react-datepicker>button]:border [&.react-datepicker>button]:border-solid [&.react-datepicker>button]:border-gray-300 [&.react-datepicker>button]:rounded-md",
  size: "[&.react-datepicker>button]:h-[22px] [&.react-datepicker>button]:w-[22px]",
  children: {
    position: "[&.react-datepicker>button>span]:top-0",
    border:
      "[&.react-datepicker>button>span]:before:border-t-[1.5px] [&.react-datepicker>button>span]:before:border-r-[1.5px] [&.react-datepicker>button>span]:before:border-gray-400",
    size: "[&.react-datepicker>button>span]:before:h-[7px] [&.react-datepicker>button>span]:before:w-[7px]",
  },
};

const timeOnlyClasses = {
  base: "[&.react-datepicker--time-only>div]:pr-0 [&.react-datepicker--time-only>div]:w-28",
};

export interface DatePickerProps<selectsRange extends boolean | undefined>
  extends Omit<any, "selectsRange" | "onChange"> {
  onChange(
    date: selectsRange extends false | undefined
      ? Date | null
      : [Date | null, Date | null],
    event: React.SyntheticEvent<any> | undefined
  ): void;
  selectsRange?: selectsRange;
  inputProps?: InputProps;
}

export const DatePicker = ({
  customInput,
  showPopperArrow = false,
  dateFormat = "d MMMM yyyy",
  selectsRange = false,
  onCalendarOpen,
  onCalendarClose,
  inputProps,
  calendarClassName,
  onChange: externalOnChange,
  ...props
}: DatePickerProps<boolean>) => {
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleCalenderOpen = () => setIsCalenderOpen(true);
  const handleCalenderClose = () => setIsCalenderOpen(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (externalOnChange) {
      externalOnChange(dates, undefined);
    }
  };

  return (
    <div
      className={cn(
        "flex [&_.react-datepicker-wrapper]:flex [&_.react-datepicker-wrapper]:w-full",
        props?.className
      )}
    >
      <ReactDatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        customInput={
          customInput || (
            <div className="h-[36px] w-full bg-white  border-[1.5px] border-gray-200 rounded-md shadow-sm px-3 py-2 flex items-center">
              <FiCalendar className="text-gray-500 mr-2" />

              <div className="flex-grow text-gray-500">
                {startDate && endDate
                  ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                  : startDate
                  ? `${formatDate(startDate)} - End Date`
                  : "Start Date - End Date"}
              </div>

              <FiChevronDown className="text-gray-500" />
            </div>
          )
        }
        showPopperArrow={showPopperArrow}
        dateFormat={dateFormat}
        selectsRange={selectsRange}
        onCalendarOpen={onCalendarOpen || handleCalenderOpen}
        onCalendarClose={onCalendarClose || handleCalenderClose}
        calendarClassName={cn(
          calendarContainerClasses.base,
          calendarContainerClasses.monthContainer.padding,
          prevNextButtonClasses.base,
          prevNextButtonClasses.border,
          prevNextButtonClasses.size,
          prevNextButtonClasses.children.position,
          prevNextButtonClasses.children.border,
          prevNextButtonClasses.children.size,
          timeOnlyClasses.base,
          calendarClassName
        )}
        {...props}
      />
    </div>
  );
};
