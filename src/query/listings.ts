import { useQuery } from 'react-query';
import qs from 'query-string';
import axios from 'axios';
type ListingFilters = {
  page: number;
  limit: number;
  q?: string;
  sort?: string;
  order?: string;
  listing_price_from?: number;
  listing_price_to?: number;
};

const useListings = (filters: ListingFilters) => {
  const { isLoading, error, data } = useQuery(
    [
      'listings',
      filters.listing_price_from,
      filters.listing_price_to,
      filters.order,
      filters.sort,
      filters.page,
      filters.limit,
    ],
    async () => {
      const res = await axios.get(
        `https://api.empireflippers.com/api/v1/listings/list?${qs.stringify(
          filters,
        )}`,
        { headers: { 'Access-Control-Allow-Origin': '*' } },
      );
      return res.data;
    },
  );
  return {
    isLoading,
    error,
    data,
  };
};

export { useListings };
