import Feature from '../Feature';
import styles from './styles.module.css';

import type { FeatureProps } from '../Feature';

const FeatureList: FeatureProps[] = [
  {
    id: 1,
    description: (
      <>
        {'Docusaurus was designed from the ground up to be easily installed and'}
        {'used to get your website up and running quickly.'}
      </>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    title: 'Easy to Use',
  },
  {
    id: 2,
    description: (
      <>
        {'Docusaurus lets you focus on your docs, and we'}&apos;{'ll do the chores. Go'}
        {'ahead and move your docs into the '}
        <code>{'docs'}</code> {'directory.'}
      </>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    title: 'Focus on What Matters',
  },
  {
    id: 3,
    description: (
      <>
        {'Extend or customize your website layout by reusing React. Docusaurus can'}
        {'be extended while reusing the same header and footer.'}
      </>
    ),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    title: 'Powered by React',
  },
];

const HomepageFeatures: React.FC = () => (
  <section className={styles.features}>
    <div className={'container'}>
      <div className={'row'}>
        {FeatureList.map((props) => (
          <Feature key={props.id} {...props} />
        ))}
      </div>
    </div>
  </section>
);

export default HomepageFeatures;
