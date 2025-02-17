import React from 'react';

import styles from './styles.module.css';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const Storybook: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={'Description will go into a meta tag in <head />'}
      title={`Storybook from ${siteConfig.title}`}
      noFooter>
      <main>
        <iframe className={styles.storybook} src={'/project/storybook-static/'} />
      </main>
    </Layout>
  );
};

export default Storybook;
