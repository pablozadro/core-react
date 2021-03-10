import React, { useState } from 'react';
import LocaleContext from '../../contexts/Locale';
import Button from '../../elements/button/Button';
import './Topnav.scss';

interface ITopnavProps { 
  primaryNav: Array<JSX.Element>;
  secondaryNav: Array<JSX.Element>; 
}

export default function Topnav ({ primaryNav, secondaryNav }: ITopnavProps) {
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
              <li><Button theme="white" txt={localeContext.locale} onClick={ localeContext.toggleLocale }/></li>
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