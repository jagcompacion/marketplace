import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Filters from './Filters';
import MarketPlaceList from './List';
import { FilterValue } from '../types/filters';
import { useListings } from '../query/listings';

const initFilters = {
  listingPrice: {
    from: 0,
    to: 0,
  },
};

const MarketPlace = () => {
  const [filters, setFilters] = useState(initFilters);

  const handleFilter = (newFilter: FilterValue) => {
    setFilters({
      ...filters,
      ...newFilter,
    });
  };

  const { isLoading } = useListings({ page: 1, limit: 20 });
  console.log(isLoading);
  return (
    <Container>
      <Row className="my-5 justify-content-center">
        <Col md="4">
          <h5 className="mb-3">Filters</h5>
          <Filters initFilters={filters} onApplyFilters={handleFilter} />
        </Col>
        <Col md="8">
          <h4 className="mb-3">Market Place</h4>
          <MarketPlaceList />
        </Col>
      </Row>
    </Container>
  );
};

export default MarketPlace;
