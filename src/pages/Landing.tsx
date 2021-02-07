import React from 'react';
import Section from '../ui/section/Section';
import Brand from '../ui/brand/Brand';

export default function Landing () {
  return (
    <div className="align-center" style={{ marginTop: '10%' }}>
      <Section title="Welcome to Core React">
        <Brand size="md" />
      </Section>
    </div>
  );
};