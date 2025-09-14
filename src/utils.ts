export const createPageUrl = (page: string): string => {
  const pageName = page.toLowerCase();
  if (pageName === 'home') return '/';
  // Simple conversion from "TestPacks" to "test-packs"
  const kebabCase = pageName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  return `/${kebabCase}`;
};