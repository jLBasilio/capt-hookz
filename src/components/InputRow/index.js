import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import './inputrow.scss';


import Buttonz from '../Buttonz';

const InputRow = (props) => {
  const {
    name,
    onChange,
    content,
    placeholder
  } = props;

  return (
    <div className="inputrow">
      <Input
        name={name}
        onChange={onChange}
        value={content}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputRow;
