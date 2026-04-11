import Layout from "./../../app/components/shared/Layout/Layout";

import content from "./../../app/data/pages/privacy/data.json";

import styles from "./index.module.css";

const Privacy = () => {
  const SectionsList = content.Sections.map((section, index) => {
    return (
      <section key={index}>
        {section.Title ? (
          <h4 key={index} className={styles.subTitle}>
            {section.Title}
          </h4>
        ) : null}
        {section.Type == "Paragraph" ? (
          section.Paragraphs.map((p, idx) => (
            <p key={idx} className={styles.span}>
              {p}
            </p>
          ))
        ) : (
          <ul>
            {section.Paragraphs.map((p, idx) => (
              <li key={idx} className={styles.listItem}>
                {p}
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  });

  return (
    <Layout padding='130px 0 100px'>
      <div className={styles.container}>
        <h2 className={styles.title}>{content.Title}</h2>

        {SectionsList}
      </div>
    </Layout>
  );
};

export default Privacy;
