const baseURL = `https://api.openweathermap.org/data/2.5/`;
const apiKey = `e539b3dcdce62f43d0c9eac4ff2b6ab4`;

const api = {
  fetchForecastByLocation: function({ location }) {
    return fetch(
      `${baseURL}forecast/daily?q=${location}&type=accurate&APPID=${apiKey}&cnt=5`
    ).then(res => res.json());
  },
  fetchForecastByCoords: function({ lat, lon }) {
    return fetch(
      `${baseURL}forecast/daily?lat=${lat}&lon=${lon}&type=accurate&APPID=${apiKey}&cnt=5`
    ).then(res => res.json());
  }
};

export default api;
