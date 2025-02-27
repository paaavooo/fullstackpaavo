function getCurrentDate() {
  return new Date().toLocaleDateString();
}
function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
module.exports = { getCurrentDate, formatDate };