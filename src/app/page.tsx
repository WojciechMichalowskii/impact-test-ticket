import Hero from "@/components/Hero";
import styles from "./Home.module.scss";
import CategoryList from "@/components/CategoryList";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Hero />
      <CategoryList />
    </div>
  );
}
