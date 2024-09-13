import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Witamy w naszym sklepie!</h1>
        <p>Znajdź swoje ulubione produkty w najlepszych cenach.</p>
      </div>
    </section>
  );
};

export default Hero;
