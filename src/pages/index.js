import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const skills = [
  {
    title: 'GCP',
    imageUrl: 'img/gcp.svg',
    skillLevel: 8
  },
  {
    title: 'Angular',
    imageUrl: 'img/angular.svg',
    skillLevel: 9
  },
  {
    title: 'Firebase',
    imageUrl: 'img/firebase.svg',
    skillLevel: 9
  },
  {
    title: 'Python',
    imageUrl: 'img/python.svg',
    skillLevel: 9
  },
  {
    title: 'Typescript/Javascript',
    imageUrl: 'img/typescript.svg',
    skillLevel: 9
  },
  {
    title: 'Node.js',
    imageUrl: 'img/nodejs.svg',
    skillLevel: 8
  },
  {
    title: 'Apache Kafka',
    imageUrl: 'img/kafka.svg',
    skillLevel: 8
  },
  {
    title: 'Elastic',
    imageUrl: 'img/elastic.svg',
    skillLevel: 7
  },
  {
    title: 'Docker',
    imageUrl: 'img/docker.svg',
    skillLevel: 8
  },
  {
    title: 'Flutter',
    imageUrl: 'img/flutter.svg',
    skillLevel: 6
  },
  {
    title: 'Mobile',
    imageUrl: 'img/mobile.svg',
    skillLevel: 9
  },
  {
    title: 'Go',
    imageUrl: 'img/go.svg',
    skillLevel: 5
  },
  {
    title: 'Linux',
    imageUrl: 'img/linux.svg',
    skillLevel: 6
  },
  {
    title: 'DevOps',
    imageUrl: 'img/devops.svg',
    skillLevel: 9
  },
  {
    title: 'Microsoft Azure',
    imageUrl: 'img/azure.svg',
    skillLevel: 6
  },
  {
    title: 'Kubernetes',
    imageUrl: 'img/kubernetes.svg',
    skillLevel: 8
  },
  {
    title: 'C# & .NET Core',
    imageUrl: 'img/dotnetcore.svg',
    skillLevel: 7
  },
  {
    title: 'NoSQL',
    imageUrl: 'img/nosql.svg',
    skillLevel: 7
  },
  {
    title: 'React',
    imageUrl: 'img/react.svg',
    skillLevel: 6
  },
  {
    title: 'GitHub Actions',
    imageUrl: 'img/github_actions.svg',
    skillLevel: 8
  },
  {
    title: 'Jenkins',
    imageUrl: 'img/jenkins.svg',
    skillLevel: 9
  },
  {
    title: 'Progressive Web Apps',
    imageUrl: 'img/pwa.svg',
    skillLevel: 9
  },
  {
    title: 'Terraform',
    imageUrl: 'img/terraform.svg',
    skillLevel: 7
  },
  {
    title: 'Vault',
    imageUrl: 'img/vault.svg',
    skillLevel: 6
  }
];

const funSkills = [
  {
    title: 'Camping',
    imageUrl: 'img/camping.svg',
    skillLevel: 9
  },
  {
    title: 'Parenting',
    imageUrl: 'img/parenting.svg',
    skillLevel: 10
  },
  {
    title: 'Fishing',
    imageUrl: 'img/fishing.svg',
    skillLevel: 6
  },
  {
    title: 'Basketball',
    imageUrl: 'img/basketball.svg',
    skillLevel: 7
  },
  {
    title: 'Cooking',
    imageUrl: 'img/cooking.svg',
    skillLevel: 8
  },
  {
    title: 'Running',
    imageUrl: 'img/running.svg',
    skillLevel: 2
  }
];

function Skill({title, imageUrl, skillLevel}) {
  const imgUrl = useBaseUrl(imageUrl);
  const skillScore = `${(skillLevel / 10) * 100}%`;
  return (
    <div className={clsx('col col--4', styles.skill)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.skillImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div className={styles.skillContainer}>
        <div style={{width: skillScore}} className={styles.skillScore}></div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/about/intro')}>
              Introduction
            </Link>
          </div>
        </div>
      </header>
      <main>
        {skills && skills.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {skills.sort((a, b) => (a.skillLevel > b.skillLevel) ? -1 : 1).map((props, idx) => (
                  <Skill key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {funSkills && funSkills.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {funSkills.sort((a, b) => (a.skillLevel > b.skillLevel) ? -1 : 1).map((props, idx) => (
                  <Skill key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
