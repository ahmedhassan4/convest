import { siteConfig } from '@/config/site.config';
import cn from '@/utils/class-names';
import { useState } from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { Input } from 'rizzui';
import { useDebouncedCallback } from 'use-debounce';

const SearchInput = ({
  searchTerm = '',
  onSearchChange,
  onSearchClear,
  placeholder = 'Search ...',
  className = ""
}: {
  searchTerm: string;
  onSearchChange: (text: any) => void;
  onSearchClear: () => void;
  placeholder?: string;
  className?: string
}) => {
  const [search, setSearch] = useState(searchTerm);
  const debounced = useDebouncedCallback((e) => {
    onSearchChange(e);
  }, siteConfig.debounceDuration);
  return (
    <Input
      type="search"
      placeholder={placeholder}
      value={search}
      onClear={() => {
        setSearch('');
        onSearchClear();
      }}
      onChange={(e) => {
        setSearch(e.target.value);
        debounced(e);
      }}
      inputClassName={cn("h-9", className)}
      clearable={true}
      prefix={<PiMagnifyingGlassBold className="h-4 w-4" />}
    />
  );
};
export default SearchInput;
