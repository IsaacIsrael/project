import clsx from 'clsx';

import styles from './index.module.css';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

const HomepageHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={'container'}>
        <Heading as={'h1'} className={'hero__title'}>
          {siteConfig.title}
        </Heading>
        <p className={'hero__subtitle'}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className={'button button--secondary button--lg'} to={'/docs/api/getting-start'}>
            {'Documentation'}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
