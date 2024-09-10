import styles from "./styles.module.scss";
import Link from "next/link";

interface CategoryListProps {
  categories: string[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div>
      <h2>Kategorie</h2>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category}>
            <Link
              href={`/category/${category.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
