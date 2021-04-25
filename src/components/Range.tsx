import { Form } from 'react-bootstrap';
import { RangeValue } from '../types/range';

type Props = {
  label: string;
  value: RangeValue;
  name: string;
  onChange: (value: RangeValue, name: string) => void;
};

const Range = ({ label, name, value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value: inputValue } = e.target;
    onChange(
      {
        ...value,
        [inputName]: Number(inputValue),
      },
      name,
    );
  };

  return (
    <div>
      <Form.Group controlId="formPlaintextEmail">
        <Form.Label>{label}</Form.Label>
        <div className="d-flex align-items-center">
          <Form.Control
            value={value.from}
            name="from"
            onChange={handleChange}
          />
          <div className="mx-2">To</div>
          <Form.Control value={value.to} name="to" onChange={handleChange} />
        </div>
      </Form.Group>
    </div>
  );
};

export default Range;
