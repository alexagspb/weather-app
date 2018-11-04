export function getCitiesFromLocalStorage() {
  let cities = localStorage.getItem("cities");
  cities = cities ? JSON.parse(cities) : {};
  return cities;
}

function setCities(cities) {
  localStorage.setItem("cities", JSON.stringify(cities));
}

export function getCityFromLocalStorage(name) {
  let cities = getCitiesFromLocalStorage();

  if (name in cities) {
    return { name, id: cities[name].id, list: cities[name].list };
  } else {
    return null;
  }
}

export function setCityToLocalStorage({ id, name, list }) {
  let cities = getCitiesFromLocalStorage();

  if (!(name in cities)) {
    cities[name] = { id, list };
  }

  setCities(cities);
}

export function removeCityFromLocalStorage(name) {
  let cities = getCitiesFromLocalStorage();

  if (name in cities) {
    delete cities[name];
  }

  setCities(cities);
}
