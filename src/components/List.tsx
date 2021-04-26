import { Table, Button } from 'react-bootstrap';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { SortValue } from '../types/sort';

type Props = {
  listings: {
    id: string;
    niches: {
      niche: string;
    }[];
    listing_price: number;
  }[];
  sort: SortValue;
  onChangeSort: (value: SortValue) => void;
  isLoading: boolean;
};

const listHeaders = [
  {
    label: 'Niches',
    name: 'niches',
    align: 'left',
    hasSort: false,
  },
  {
    label: 'Listing Price',
    name: 'listing_price',
    align: 'right',
    hasSort: true,
  },
];

const List = ({ listings, sort, onChangeSort, isLoading }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;

    onChangeSort({
      sort: id,
      order: id === sort.sort && sort.order === 'DESC' ? 'ASC' : 'DESC',
    });
  };

  const renderLoading = (
    <tr>
      <td colSpan={2}>Loading</td>
    </tr>
  );

  const renderRows = listings.length ? (
    listings.map((item) => (
      <tr key={item.id}>
        <td>{item.niches.map((niche) => niche.niche).join(', ')}</td>
        <td className="text-right">{item.listing_price}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={2}>No data</td>
    </tr>
  );

  const renderComponent = isLoading ? renderLoading : renderRows;

  return (
    <Table>
      <thead>
        <tr>
          {listHeaders.map((item) => (
            <th className={`text-${item.align}`}>
              {item.label}{' '}
              {item.hasSort && (
                <Button
                  variant="link"
                  className="p-0"
                  id={item.name}
                  onClick={handleClick}
                >
                  {sort.order === 'DESC' ? <FaCaretDown /> : <FaCaretUp />}
                </Button>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{renderComponent}</tbody>
    </Table>
  );
};

export default List;
