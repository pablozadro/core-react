import React from 'react';
import Section from '../ui/section/Section';
import Article from '../ui/article/Article';
import Input from '../ui/controls/input/Input';

export default function Controls () {
  return (
    <div className="container">
      <Section title="Controls">

        <Article title="Default inputs">
          <div className="box-mg-b">
            <p>Text</p>
            <Input type="text" />
          </div>
          <div className="box-mg-b">
            <p>Number</p>
            <Input type="number" />
          </div>
          <div className="box-mg-b">
            <p>Email</p>
            <Input type="email" />
          </div>
        </Article>

        <Article title="Validators">
          <div className="box-mg-b">
            <p>4 Characters min.</p>
            <Input type="text" validators={[{ name: 'minLen', settings: { min: 4 } }]}/>
          </div>
          <div className="box-mg-b">
            <p>Greather than 4</p>
            <Input type="number" validators={[{ name: 'minValue', settings: { min: 4 } }]} />
          </div>
        </Article>

    </Section>
  </div>
  );
};