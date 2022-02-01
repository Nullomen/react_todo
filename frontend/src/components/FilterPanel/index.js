import React, {useState} from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import './styles.css';

const radios = [
  { name: 'All', value: 1, flag: null },
  { name: 'ToDo', value: 2, flag: false },
  { name: 'Completed', value: 3, flag: true },
];

const FilterPanel = ({ setFilterFlag }) => {
  const [radioValue, setRadioValue] = useState(1);

  return (
    <ButtonGroup className='mb-2'>
      {radios.map((radio, idx) => (
        <ToggleButton
          className='btn'
          key={idx}
          id={`radio-${idx}`}
          type='radio'
          variant='btn'
          name='radio'
          value={radio.value}
          checked={radioValue === radio.value}
          onClick={() => setFilterFlag(radio.flag)}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  )
};

export default FilterPanel;
