import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Filters from './Filters';
import List from './List';
import { FilterValue } from '../types/filters';
import { useListings } from '../query/listings';
import { SortValue } from '../types/sort';

const initFilters = {
  listingPrice: {
    from: 0,
    to: 0,
  },
  sort: {
    sort: 'listing_price',
    order: 'ASC',
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

  const handleChangeSort = (sort: SortValue) => {
    setFilters({
      ...filters,
      sort,
    });
  };

  const { isLoading, data } = useListings({
    listing_price_from: filters.listingPrice.from,
    listing_price_to: filters.listingPrice.to,
    sort: filters.sort.sort,
    order: filters.sort.order,
    page: 1,
    limit: 20,
  });

  const listings = data ? data.data.listings : [];
  console.log(filters);
  return (
    <Container>
      <Row className="my-5 justify-content-center">
        <Col md="4">
          <h5 className="mb-3">Filters</h5>
          <Filters initFilters={filters} onApplyFilters={handleFilter} />
        </Col>
        <Col md="8">
          <h4 className="mb-3">Market Place</h4>
          <List
            listings={listings}
            sort={filters.sort}
            onChangeSort={handleChangeSort}
            isLoading={isLoading}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MarketPlace;
