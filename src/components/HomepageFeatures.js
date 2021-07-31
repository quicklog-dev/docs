import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'VS Code Integration',
    Svg: require('../../static/img/vscode.svg').default,
    description: (
      <>
        Quickly Debug Your Code, Without Leaving Visual Studio Code
      </>
    ),
  },
  {
    title: 'Realtime Log Insertion',
    Svg: require('../../static/img/terminal.svg').default,
    description: (
      <>
        Quickly Add Logs to Your Web Application in Realtime
      </>
    ),
  },
  {
    title: 'Go lang support',
    Svg: require('../../static/img/gopher.svg').default,
    description: (
      <>
        Quickly debug your go application in real time.
        More language support coming soon.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
