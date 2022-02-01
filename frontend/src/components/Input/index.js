import React, { useState } from 'react';
import './styles.css';

const Input = ({ onAddNews }) => {
  const [text, setText] = useState('');

  const handleChange = e => { setText( e.target.value) };
  const validate = () => !text.trim();

  const test = (e) => {
    if (e.charCode === 13 && !validate()) {
      onAddNews(text);
      setText('');
    }
  }

  return (
    <input
      className='input-form'
      size='sm'
      type='text'
      placeholder='Enter your task name here'
      value={text}
      onChange={handleChange}
      onKeyPress={test}
    />
  );
};

export default Input;
