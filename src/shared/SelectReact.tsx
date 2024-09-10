import { useEffect, useState } from 'react';
import Label from './label';
import Select from 'react-select';
import { UserSelectType } from '@/types/shared';
import cn from '@/utils/class-names';
import ErrorMessage from './ErrorMessage';
const SelectReact = ({
  label,
  options = [],
  field,
  onChange,
  value,
  isDisabled = false,
  isLoading = false,
  onInputChange,
  className,
  isMulti = false,
  onLoadMore,
  hasMore,
  error,
  ...props
}: {
  label: string;
  options?: any[];
  field?: any;
  onChange?: any;
  value?: any;
  isDisabled?: boolean;
  isLoading?: boolean;
  onInputChange?: (value: string) => void;
  isMulti?: boolean;
  className?: string;
  onLoadMore?: any;
  hasMore?: boolean;
  error?: string;
}) => {
  const [valueState, setValueState] = useState<UserSelectType>();
  useEffect(() => {
    if (value && typeof value !== 'object' && options?.length > 0) {
      const selectedOption = options?.find((option) => option.value === value);
      setValueState(selectedOption);
    }
  }, [value, JSON.stringify(options)]);

  useEffect(() => {
    if (typeof value === 'object') {
      setValueState(value);
    }
  }, [value]);

  return (
    <div className={cn('w-full', className)}>
      <Label className="rizzui-input-label mb-1.5 block text-sm font-medium">
        {label}
      </Label>
      <Select
        value={valueState}
        {...field}
        options={options}
        isDisabled={isDisabled}
        onInputChange={onInputChange}
        isLoading={isLoading}
        onChange={(value) => {
          console.log("in", value)
          onChange(value);
        }}
        isMulti={isMulti}
        closeMenuOnSelect={!isMulti}
        isClearable={true}
        hasMore={hasMore}
        onMenuScrollToBottom={onLoadMore}
        {...props}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};
export default SelectReact;
