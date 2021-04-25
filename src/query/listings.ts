import { useQuery } from 'react-query';
import qs from 'query-string';
import axios from 'axios';

type ListingFilters = {
  page: number;
  limit: number;
  q?: string;
  sort?: string;
  order?: string;
};

const useListings = (filters: ListingFilters) => {
  const { isLoading, error, data } = useQuery(
    'listings',
    async () =>
      await axios.get(
        `https://api.empireflippers.com/api/v1/listings/list?${qs.stringify(
          filters,
        )}`,
        { headers: { 'Access-Control-Allow-Origin': '*' } },
      ),
  );
  return {
    isLoading,
    error,
    data,
  };
};

export { useListings };
