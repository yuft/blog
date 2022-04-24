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
      <p></p>
    </Layout>
  );
};

export default About;
