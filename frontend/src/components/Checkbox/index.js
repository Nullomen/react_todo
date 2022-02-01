import React from 'react';
import CheckedSign from '../svg/CheckedSign';
import './styles.css';

const Checkbox = ({ isChecked, changeCheck }) => (
  <label className='custom-checkbox'>
   <input type='checkbox' checked={isChecked} onChange={changeCheck} /> 
   <CheckedSign/>
  </label>
);

export default Checkbox;
