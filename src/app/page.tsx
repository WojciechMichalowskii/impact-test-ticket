import Hero from "@/components/Hero";
import styles from "./Home.module.scss";
import Link from "next/link";
import CategoryList from "@/components/CategoryList";

async function getCategories(): Promise<string[]> {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  return response.json();
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className={styles.mainContainer}>
      <Hero />
      <CategoryList categories={categories} />
    </div>
  );
}
