import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    image: (
      <img
        src={require("@site/static/img/person.png").default}
        alt="Person"
        style={{ width: 100 }}
      />
    ),
    description: (
      <>
        SandwichScan is designed to make complex blockchain data and MEV
        analysis accessible to everyone. With just a click, you can detect and
        visualize sandwich attacks, clearly see front-runs, back-runs, and
        losses.
      </>
    ),
  },
  {
    title: "Open Source",
    image: (
      <img
        src={require("@site/static/img/open.png").default}
        alt="Open Source"
        style={{ width: 100 }}
      />
    ),
    description: (
      <>
        SandwichScan is open source, built by the community for the community.
        We believe in transparency and collaboration.
      </>
    ),
  },
  {
    title: "Free to Use",
    image: (
      <img
        src={require("@site/static/img/free.png").default}
        alt="Free"
        style={{ width: 100 }}
      />
    ),
    description: (
      <>
        SandwichScan is completely free to use. We want to empower everyone to
        understand and analyze blockchain transactions without any barriers.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">{image}</div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
