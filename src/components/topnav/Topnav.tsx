import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../../contexts/Locale';
import Button from '../../elements/button/Button';
import './Topnav.scss';

interface TopnavProps { 
  changeLocale: Function;
  primaryNav: Array<JSX.Element>;
  secondaryNav: Array<JSX.Element>; 
}

export default function Topnav ({ changeLocale, primaryNav, secondaryNav }: TopnavProps) {
  const [isActive, setActive] = useState(false);

  return (
    <LocaleContext.Consumer>
    {localeContext => {
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
              <li><Button theme="white" txt={localeContext.locale} onClick={ changeLocale }/></li>
            </ul>
          </div>
          <button className="topnav__toggler" onClick={() => { setActive(!isActive) }}>
            <i className="material-icons">menu</i>
          </button>
        </nav>
      )
    }}
    </LocaleContext.Consumer>
  );
};

Topnav.propTypes = {
  primaryNav: PropTypes.array.isRequired,
  secondaryNav: PropTypes.array.isRequired
};