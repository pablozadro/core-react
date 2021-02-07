import React from 'react';
import './Button.scss';

type ButtonProps = {
  txt:string; 
  theme?:string;
  size?:string;
  icon?:string;
  onClick?: Function;
}

export default function Button ({ 
  txt, 
  theme = 'gray', 
  size = 'rg', 
  icon, 
  onClick 
  }: ButtonProps) {

  return (
    <button className={`${theme}-btn ${size}`} onClick={() => { onClick && onClick() }}>
      {icon && <i className="material-icons">{icon}</i>}
      <span>{ txt }</span>
    </button>
  );
};