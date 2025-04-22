function showPage(pageId) {
  const sections = document.querySelectorAll("main section");
  sections.forEach(section => {
    section.style.display = section.id === pageId ? "block" : "none";
  });
}
