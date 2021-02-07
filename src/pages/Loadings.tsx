import React from 'react';
import Section from '../ui/section/Section';
import Article from '../ui/article/Article';
import Loading from '../ui/loading/Loading';

export default function Loadings () {
  return (
    <div className="container">
      <Section title="Brands">
        <Article title="Default">
          <Loading />
        </Article>

        <Article title="With text">
          <Loading txt="loading"/>
        </Article>
      </Section>
    </div>
  );
};