import Skeleton from "react-loading-skeleton";
import styles from "./styles.module.scss";

const SkeletonLoader = ({ count = 10 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <li key={index} className={styles.skeletonItem}>
          <Skeleton className={styles.skeletonImage} />
          <Skeleton className={styles.skeletonTitle} />
          <Skeleton className={styles.skeletonPrice} />
          <Skeleton className={styles.skeletonButton} />
        </li>
      ))}
    </>
  );
};

export default SkeletonLoader;
