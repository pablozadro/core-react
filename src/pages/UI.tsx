import React from 'react';
import { Link } from "react-router-dom";
import Section from '../ui/section/Section';
import Article from '../ui/article/Article';

export default function UI () {
  return (
    <div className="container">
      <Section title="UI">
        <Article title="Overview">
          <ul className="list">
            <li>
              <Link className="link black" to="/ui/buttons">Buttons</Link>
            </li>
            <li>
              <Link className="link black" to="/ui/messages">Messages</Link>
            </li>
            <li>
              <Link className="link black" to="/ui/brand">Brand</Link>
            </li>
            <li>
              <Link className="link black" to="/ui/loading">Loading</Link>
            </li>
            <li>
              <Link className="link black" to="/ui/controls">Controls</Link>
            </li>
          </ul>
        </Article>
      </Section>
    </div>
  );
};