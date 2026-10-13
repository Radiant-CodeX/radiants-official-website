"use client";
import React from "react";
import PageLayout from "@/components/PageLayout/PageLayout";
import Footer from "@/components/Sections/Footer/Footer";
import styles from "@/components/Sections/Story/Story.module.scss";

type LegalPageProps = {
  kicker: string;
  title: string;
  updated: string;
  children: React.ReactNode;
};

export default function LegalPage({ kicker, title, updated, children }: LegalPageProps) {
  return (
    <PageLayout>
      <div className={styles.storyRoot}>
        <section className={`${styles.section} ${styles.legalHero}`}>
          <div className={styles.inner}>
            <p className={styles.kicker}>{kicker}</p>
            <h1 className={styles.subTitle}>{title}</h1>
            <p className={styles.subIntro}>Last updated {updated}</p>
          </div>
        </section>
        <section className={`${styles.section} ${styles.alt} ${styles.hairline}`}>
          <div className={`${styles.inner} ${styles.legal}`}>{children}</div>
        </section>
        <Footer />
      </div>
    </PageLayout>
  );
}
