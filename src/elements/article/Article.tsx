import React from 'react';

type ArticleProps = {
  title:string; 
  children?: any;
}

export default function Article ({ title, children }: ArticleProps) {
  return (
    <article>
      <header>
        <h2 className="title rg">{ title }</h2>
      </header>
      { children }
    </article>
  );
};