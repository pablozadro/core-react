import React from 'react';
import Section from '../ui/section/Section';
import Article from '../ui/article/Article';
import Button from '../ui/button/Button';

export default function Buttons () {
  return (
    <div className="container">
      <Section title="Buttons">
        <Article title="Default">
          <Button txt="button"/>
        </Article>

        <Article title="Click event">
          <Button txt="button" onClick={() => { alert('clicked!') }}/>
        </Article>

        <Article title="Icons">
          <Button txt="button" icon="send" />
        </Article>

        <Article title="Themed">
          <ul className="flex-baseline">
          {['black', 'gray', 'white', 'primary', 'secondary', 'warn', 'error', 'ok'].map((theme, i) => {
            return (
              <li key={i}>
                <Button txt={theme} theme={theme} />
              </li>
            )
          })}
          </ul>
        </Article>

        <Article title="Sized">
          <ul className="flex-baseline">
          {['md', 'rg', 'sm', 'xs'].map((size, i) => {
            return (
              <li key={i}>
                <Button txt={size} size={size} icon="check_circle_outline"/>
              </li>
            )
          })}
          </ul>
        </Article>
      </Section>
    </div>
  );
};