import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BoxLink, { BoxLinkProps } from "./BoxLink";
import styles from "./styles.module.css";

export default function HomeLinks(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { themeConfig } = siteConfig;

  const links: BoxLinkProps[] = (themeConfig.navbar as any).items.filter(
    (item: any) => item?.metadata?.autogenerated
  );

  return (
    <section className={styles.boxLinks}>
      <div className="container">
        <div className="row">
          {links.map((props: BoxLinkProps, idx: number) => (
            <BoxLink key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
