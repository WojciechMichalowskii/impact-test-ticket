import SideCategory from "@/components/SideCategory";
import styles from "./Category.module.scss";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  return (
    <div className={styles.categoryPage}>
      <h1>Kategoria: {category}</h1>
      <SideCategory category={category} />
    </div>
  );
}
