export function getFromLocalStorage() {
  return localStorage.getItem("cities");
}

export function setToLocalStorage(cities) {
  localStorage.setItem("cities", cities);
}

export function removeFromLocalStorage() {
  localStorage.removeItem("cities");
}
