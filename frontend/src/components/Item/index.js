import React from 'react';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Trash from '../svg/Trash';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cn = classNames.bind(styles);

const Item = ({ text, isChecked, changeChecked, delItem }) => {
  let className = cn({'p-checked': isChecked,});
  return (
    <div class='div-container'>
      <Checkbox isChecked={isChecked} changeCheck={changeChecked} />
      <p className={className}>{text}</p>
      <Button onClick={delItem} >
        <Trash/>
      </Button>
    </div>
  );
};

export default Item;
