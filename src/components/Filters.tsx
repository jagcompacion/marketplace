import { Button } from 'react-bootstrap';
import Range from './Range';

const Filters = () => {
  const filters = {
    listingPrice: {
      from: 0,
      to: 0,
    },
  };
  const handleRangeChange = (value: object) => {
    console.log(value);
  };

  return (
    <div>
      <Range
        label="Listing Price"
        value={filters.listingPrice}
        onChange={handleRangeChange}
      />
      <Button>Apply</Button>
    </div>
  );
};

export default Filters;
