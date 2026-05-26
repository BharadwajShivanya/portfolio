function getPubTypeLabel(t) {
  return "#book" in t ? "Book" : "Journal Paper";
}
function getResTypeLabel(t) {
  return "#paper" in t ? "Research Paper" : "Academic Article";
}
function getTimelineCategoryLabel(c) {
  if ("#career" in c) return "Career";
  if ("#publication" in c) return "Publication";
  return "Award";
}
export {
  getResTypeLabel as a,
  getTimelineCategoryLabel as b,
  getPubTypeLabel as g
};
