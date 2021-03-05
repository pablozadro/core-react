import React from 'react';
import Section from '../elements/section/Section';
import Brand from '../elements/brand/Brand';

export default function Home () {
  return (
    <div className="align-center" style={{ marginTop: '10%' }}>
      <Section title="Welcome to Core React">
        <Brand size="md" />
      </Section>
    </div>
  );
};