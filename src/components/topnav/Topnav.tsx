import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Topnav.scss';

interface TopnavProps { 
  primaryNav: Array<JSX.Element>;
  secondaryNav: Array<JSX.Element>; 
}

export default function Topnav ({ primaryNav, secondaryNav }: TopnavProps) {
  const [isActive, setActive] = useState(false);

  return (
    <nav className="topnav">
      <span className="topnav__brand"></span>
      <div className={`topnav__content ${isActive && 'is--active'}`}>
        <ul className="topnav__menu">
          {primaryNav.map((link,i) => {
            return (
              <li key={i}>{ link }</li>
            )
          })}
        </ul>
        <ul className="topnav__menu">
          {secondaryNav.map((link,i) => {
            return (
              <li key={i}>{ link }</li>
            )
          })}
        </ul>
      </div>
      <button className="topnav__toggler" onClick={() => { setActive(!isActive) }}>
        <i className="material-icons">menu</i>
      </button>
    </nav>
  );
};

Topnav.propTypes = {
  primaryNav: PropTypes.array.isRequired,
  secondaryNav: PropTypes.array.isRequired
};