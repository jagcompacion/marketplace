import { Form, Row, Col } from 'react-bootstrap';

type Props = {
  label: string;
  value: {
    from: number;
    to: number;
  };
  onChange: (value: object) => void;
};

const Range = ({ label, value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: inputValue } = e.target;
    onChange({
      ...value,
      [name]: Number(inputValue),
    });
  };

  return (
    <div>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column={true} sm="2">
          {label}
        </Form.Label>
        <Col sm="10">
          <div className="d-flex align-items-center">
            <Form.Control
              value={value.from}
              name="from"
              onChange={handleChange}
            />
            <div className="mx-2">To</div>
            <Form.Control value={value.to} name="to" onChange={handleChange} />
          </div>
        </Col>
      </Form.Group>
    </div>
  );
};

export default Range;
