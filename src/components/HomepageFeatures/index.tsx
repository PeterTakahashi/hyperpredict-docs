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
    title: "Fast and Low-Cost",
    image: (
      <img
        src={require("@site/static/img/person.png").default}
        alt="Person"
        style={{ width: 100 }}
      />
    ),
    description: (
      <>
        HyperPredict is built on HyperEVM and Hyperliquid, ensuring fast
        transactions with minimal fees.
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
