import React from 'react';
import { Button } from 'antd';
import './button.scss';


const Buttonz = ({ content, handler }) => (
  <Button
    className="button"
    type="primary"
    onClick={handler}
  >
    {content}
  </Button>
);

export default Buttonz;
