export const formatCategory = (category: string): string => {
  return category.replace(/\s+/g, "-").toLowerCase();
};

export const displayCategoryName = (category: string): string => {
  return category.replace(/-/g, " ");
};
