import styles from "./styles.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Witamy w naszym sklepie!</h1>
        <p>Znajdź swoje ulubione produkty w najlepszych cenach.</p>
        <Link href="/category/men's-clothing">
          <button className={styles.ctaButton}>Zobacz Produkty</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
