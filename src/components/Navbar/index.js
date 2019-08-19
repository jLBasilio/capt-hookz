import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import './navbar.scss';

import Buttonz from '../Buttonz';

const sections = [
  { label: 'FIELDS', route: '/' },
  { label: 'LIGHTS', route: '/lights' }
];

const Navbar = () => {
  return (
    <div className="navbar">
      {
        sections.map(({ label, route }) => (
          <div className="nav-section" key={route}>
            <A href={route}>
              {label}
            </A>
          </div>
        ))
      }
    </div>
  );
};

export default Navbar;
