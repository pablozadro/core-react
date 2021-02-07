import React from 'react';
import './Loading.scss';

type LoadingProps = {
  txt?:string;
}

export default function Loading ({ txt }: LoadingProps) {
  return (
    <div className="loading">
      <div className="loading__wrapper">
        <span className="loading__bar-1"></span>
        <span className="loading__bar-2"></span>
        <span className="loading__bar-3"></span>
      </div>
      { txt && <span className="loading__txt">{ txt }</span> }
    </div>
  );
};