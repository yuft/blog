import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Daniel Yu',
      }}
    >
      <h1>Daniel Yu</h1>
      <p>Cloud-Native enthusiast, interested in DevOps, SRE and platform engineering. Father of 2. WFH.</p>
    </Layout>
  );
};

export default About;
