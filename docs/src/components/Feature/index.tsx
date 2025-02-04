import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

import Heading from '@theme/Heading';

export type FeatureProps = {
  readonly id: number;
  readonly description: JSX.Element;
  readonly Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  readonly title: string;
};

const Feature: React.FC<FeatureProps> = ({ id, description, Svg, title }) => (
  <div className={clsx('col col--4')} key={id}>
    <div className={'text--center'}>
      <Svg className={styles.featureSvg} role={'img'} />
    </div>
    <div className={'text--center padding-horiz--md'}>
      <Heading as={'h3'}>{title}</Heading>
      <p>{description}</p>
    </div>
  </div>
);
export default Feature;
