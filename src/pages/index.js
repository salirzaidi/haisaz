import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Card from '@site/src/components/Card';
import CardBody from '@site/src/components/Card/CardBody';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardHeader from '@site/src/components/Card/CardHeader';
import p1 from '@site/static/img/p1.png';
import p16 from '@site/static/img/p2.png';
import p3 from '@site/static/img/p3.png';
import p4 from '@site/static/img/p4.png';
import p5 from '@site/static/img/p5.png';
import p6 from '@site/static/img/p6.png';
import p7 from '@site/static/img/p7.png';
import p8 from '@site/static/img/p8.png';
import p9 from '@site/static/img/p9.png';
import p10 from '@site/static/img/p10.png';
import p11 from '@site/static/img/p11.png';
import p12 from '@site/static/img/p12.png';
import p13 from '@site/static/img/p13.png';
import p14 from '@site/static/img/p14.png';
import p15 from '@site/static/img/p15.png';
import p2 from '@site/static/img/p16.png';
import msca from '@site/static/img/msca.png';
import epsrc from '@site/static/img/epsrc.png';

const FeatureList = [
  {
    title: 'RO1: Stakeholder Preception',
    description: (
      <>
        Investigate healthcare stakeholders’ perceptions of current use of AI in digital health and gather requirements for the design of trustworthy AI solutions.
      </>
    ),
  },
  {
    title: 'RO2: Explainabile AI',
    description: (
      <>
      Build accurate, measurable and explainable AI models to improve AI transparency for digital health.

</>
    ),
  },
  {
    title: 'RO3: Fairness through de-biasing',
    description: (
      <>
Establish a de-biasing strategy that contains a portfolio of technical and operational actions for fair AI deployment in digital health.      </>
    ),
  },
  {
    title: 'RO4: Privacy-preservation',
    description: (
      <>
Develop a secure and privacy-preserving hybrid ML/DL learning paradigm for timely, prioritised and accurate predictions.      </>
    ),
  },
  {
    title: 'RO5: Human-Machine Collaboration',
    description: (
      <>
Develop a human-machine collaborative multi-objective model selection framework for coherently explainable, fair and privacy-preserving AI in digital health.
</>
),
  },
  {
    title: 'RO6: Trustworthy AI',
    description: (
      <>
Implement, test and evaluate the developed trustworthy AI solutions in real-world digital health use cases.

</>
    ),
  },
];


const FeatureList2 = [
  {
    title: 'KT1: People',
    description: (
      <>
   Enhance the research and innovation potentials and career prospects of participating researchers including early career researchers (ESRs) and experienced researchers (ERs).
      </>
    ),
  },
  {
    title: 'KT2: EU R&I Potential',
    description: (
      <>
Strengthen EU’s competitiveness and leading position in the development of human-centric, sustainable, secure, inclusive and trustworthy AI.
</>
    ),
  },
  {
    title: 'KT3: Link',
    description: (
      <>
 Strengthen existing research links among the leading researchers and institutions that allow the exchange of knowledge and professional training; develop new and sustainable cross-disciplinary, cross-sector and cross-border collaboration to build up world-leading overarching technologies and systems related to the future trustworthy AI in digital health.
 </>    ),
  },
  {
    title: 'KT4: Dissemination',
    description: (
      <>
Effectively disseminate and exploit the outcomes of the project through project website, social media, publications and outreach activities.    
</>
)
},

  {
    title: 'KT5: Communication',
    description: (
      <>
Engage the public in the research and innovation activities and communicate research outcomes with the public to promote AI and digital health technologies and applications.</>
),
  },

];



function Feature({title, description}) {
  return (
    <div style={{"paddingTop":"10px",marginLeft:"auto",marginRight:"auto", paddingBottom:"10px"}} className={clsx('col col--5')}>
     <details>
        <summary>{title}</summary>
        {description}
      </details>
    </div>
  );
}


function Logo({fileName}) {
  return (
    <div style={{paddingLeft:"25px",width:"200px", height:"200px",paddingTop:"20px",alignItems:"center"}}>
    <Card shadow='tl' >
    <CardBody >
    <img src={logos[fileName]} style={{width:"80%",height:"80%"}} ></img>
    </CardBody>
    </Card>
    </div>
    
  );
}

const logos = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16];


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <div className="container" style={{marginLeft:"auto",marginRight:"auto"}}>
      <Heading as="h1" className="hero__title">
        {siteConfig.title}
      </Heading>
      <p className="hero__subtitle">{siteConfig.tagline}</p>

    </div>
  </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
	sidebar={false}
      title={`Home`}
      description="HarmonicAI">
      <HomepageHeader />
      <main>
        <div
          style={{
            "width": "70vw",
            "marginLeft": "auto",
            "marginRight": "auto",
            "marginTop": "30px",
            "lineHeight": "2",
            "padding": "0 20px", // Adicionando margem interna (padding) direita e esquerda
            "paddingBottom": "50px",
          }}
        >
          <h1
            style={{
              "textAlign": "left",
              "marginBottom": "20px",
            }}
          >
            Motivation
          </h1>
          <p>
            The ambitious vision of HarmonicAI is to build a human-machine collaborative multi-objective design framework to foster coherently explainable, fair, and privacy-preserving AI for digital health. The framework will provide concrete technical and operational guidelines for AI practitioners to design human-centred, domain-specific, requirement-oriented trustworthy AI solutions, accelerating the scalable deployment of AI-powered digital health services and offering assurance to the public that AI in digital health is being developed and used in an ethical and trustworthy manner.
          </p>
          <p>
            The scope of HarmonicAI is multifaceted and multidimensional. An interdisciplinary and intersectoral approach is essential to address the various challenges of trustworthy AI. HarmonicAI draws together proven experts in AI, health care, IoT, data science, privacy, cyber security, software engineering, HCI, and industrial design with an underlying common aim to design and develop innovative technologies and guidelines to resolve ethical issues with respect to fairness and data privacy, achieve transparency of AI models, and enhance safety and trust in the deployment of AI for digital health.
          </p>
          <p>
            Realising these complex goals demands a collective interdisciplinary, intersectoral, cross-border effort from a diverse variety of stakeholders including academia, industries, and healthcare providers.
          </p>
        </div>
      </main>
    </Layout>
  );
}


