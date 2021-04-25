import { Row, Col, Container } from 'react-bootstrap';
import Filters from './Filters';
import MarketPlaceList from './List';

const MarketPlace = () => {
  return (
    <Container>
      <Row className="my-5 justify-content-center">
        <Col md="8">
          <h4 className="mb-3">Market Place</h4>
          <Filters />
          <MarketPlaceList />
        </Col>
      </Row>
    </Container>
  );
};

export default MarketPlace;
