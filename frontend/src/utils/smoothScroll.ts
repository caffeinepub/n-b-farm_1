export function smoothScrollTo(sectionId: string, offset = 80) {
  const element = document.getElementById(sectionId);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
