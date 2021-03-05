import React from 'react';
import { Link } from "react-router-dom";
import Section from '../elements/section/Section';
import Article from '../elements/article/Article';

export default function State () {
  return (
    <div className="container">
      <Section title="State management">
        <Article title="Overview">
          <ul className="list">
            <li>
              <Link className="link black" to="/state/context">Context</Link>
            </li>
          </ul>
        </Article>
      </Section>
    </div>
  );
};