import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Range from './Range';
import { FilterValue } from '../types/filters';
import { RangeValue } from '../types/range';

type Props = {
  initFilters: FilterValue;
  onApplyFilters: (value: FilterValue) => void;
};

const Filters = ({ initFilters, onApplyFilters }: Props) => {
  const [filters, setFilters] = useState(initFilters);

  const handleRangeChange = (value: RangeValue, name: string) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div>
      <Range
        label="Listing Price"
        value={filters.listingPrice}
        name="listingPrice"
        onChange={handleRangeChange}
      />
      <Button onClick={handleApplyFilters}>Apply</Button>
    </div>
  );
};

export default Filters;
