export const getSlugFromPathname = (path: string): string => {
  const slug = path.split("/").slice(-1)[0].replace(".md", "");

  return slug;
};
