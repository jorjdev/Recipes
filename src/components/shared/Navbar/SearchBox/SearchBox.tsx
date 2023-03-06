import React from 'react';
import * as z from 'zod';

const searchBoxPropsSchema = z.object({
  className: z.string(),
});

interface SearchBoxProps extends z.infer<typeof searchBoxPropsSchema> {}

const SearchBox: React.FC<SearchBoxProps> = ({ className }) => {
  const validateProps = searchBoxPropsSchema.parse({ className });
  return (
    <input
      className={validateProps.className}
      type="text"
      placeholder="Search..."
    />
  );
};

export default SearchBox;
