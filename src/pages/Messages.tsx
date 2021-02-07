import React from 'react';
import Section from '../ui/section/Section';
import Article from '../ui/article/Article';
import Message from '../ui/message/Message';

export default function Messages () {
  return (
    <div className="container">
      <Section title="Buttons">
        <Article title="Default">
          <Message txt="This is a default message" />
        </Article>

        <Article title="Icons">
          <Message txt="This is a message with icon" icon="check_circle" />
        </Article>

        <Article title="Themed">
          <ul className="list">
          {['black', 'gray', 'white', 'primary', 'secondary', 'warn', 'error', 'ok'].map((theme, i) => {
            return (
              <li key={i}>
                <Message txt="This is a themed message" icon="check_circle" theme={theme} />
              </li>
            )
          })}
          </ul>
        </Article>

        <Article title="Sized">
          <ul className="list">
          {['md', 'rg', 'sm', 'xs'].map((size, i) => {
            return (
              <li key={i}>
                <Message txt="This is a sized message" icon="check_circle" theme="warn" size={size} />
              </li>
            )
          })}
          </ul>
        </Article>
      </Section>
    </div>
  );
};