import React from 'react';
import Section from '../ui/section/Section';
import Article from '../ui/article/Article';
import Brand from '../ui/brand/Brand';

export default function Brands () {
  return (
    <div className="container">
      <Section title="Brands">
        <Article title="Default">
          <Brand />
        </Article>

        <Article title="Themed">
          <ul className="flex-center">
          {['black', 'primary'].map((theme, i) => {
            return (
              <li key={i}>
                <Brand theme={theme} />
              </li>
            )
          })}
          </ul>
        </Article>

        <Article title="Sized">
          <ul className="flex-center">
          {['md', 'rg', 'sm', 'xs'].map((size, i) => {
            return (
              <li key={i}>
                <Brand size={size} />
              </li>
            )
          })}
          </ul>
        </Article>
      </Section>
    </div>
  );
};