import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/PageLayout/PageLayout";
import Footer from "@/components/Sections/Footer/Footer";
import styles from "@/components/Sections/Story/Story.module.scss";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageLayout>
      <div className={styles.storyRoot}>
        <section className={`${styles.section} ${styles.notFound}`}>
          <div className={styles.inner}>
            <p className={styles.kicker}>404 — page not found</p>
            <h1 className={styles.subTitle}>
              This page didn&apos;t <em className={styles.gold}>ship</em>.
            </h1>
            <p className={styles.subIntro}>
              The link may be old, or the page may have moved. Here&apos;s where to go instead.
            </p>
            <div className={styles.workCtas}>
              <Link className={styles.btnGold} href="/">
                Back to home
              </Link>
              <Link className={styles.btnGhost} href="/agents">
                See what we build
              </Link>
              <a className={styles.btnGhost} href={site.calUrl} target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </PageLayout>
  );
}
