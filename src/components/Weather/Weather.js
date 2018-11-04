import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Spinner from "react-svg-spinner";

import "./Weather.css";

import City from "../City";
import Day from "../Day";

import {
  getCityRequest,
  getCitiesRequest,
  removeCityRequest,
  updateCityRequest,
  selectCityRequest,
  getCitiesList,
  getActiveCity
} from "../../ducks/cities";

import { getLoading } from "../../ducks/loading";

class Weather extends PureComponent {
  state = { city: "" };

  handleInputChange = e => {
    this.setState({ city: e.target.value });
  };

  handleKeyPress = e => {
    const { city } = this.state;
    const { getCityRequest } = this.props;
    if (e.key === "Enter") {
      getCityRequest({ location: city });
      this.setState({ city: "" });
    }
  };

  handleClick = e => {
    const { city } = this.state;
    const { getCityRequest } = this.props;
    getCityRequest({ location: city });
    this.setState({ city: "" });
  };

  async componentDidMount() {
    this.props.getCitiesRequest();

    const { lat, lon } = await this.getcurrentLocation();
    console.log(lat, lon);
    this.props.getCityRequest({ lat, lon });
  }

  getcurrentLocation() {
    if (navigator && navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          resolve({
            lat: coords.latitude,
            lon: coords.longitude
          });
        });
      });
    }
  }

  removeCity = name => {
    this.props.removeCityRequest(name);
  };

  updateCity = name => {
    this.props.updateCityRequest({ location: name });
  };

  selectCity = name => {
    this.props.selectCityRequest(name);
  };

  render() {
    const { city } = this.state;
    const { loading, citiesList, activeCity } = this.props;

    return (
      <div className="Weather">
        <input
          className="Weather__input"
          placeholder="Введите город"
          value={city}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick} className="Weather__button">
          Добавить город
        </button>

        {loading ? (
          <div className="spinner row justify-content-md-center">
            <Spinner size="64px" color="blue" gap={5} />
          </div>
        ) : (
          <div>
            <div className="Weather__cities">
              {citiesList &&
                citiesList.map(item => (
                  <City
                    key={item.id}
                    isActive={activeCity.id === item.id}
                    item={item}
                    selectCity={this.selectCity}
                    updateCity={this.updateCity}
                    removeCity={this.removeCity}
                  />
                ))}
            </div>
            <div className="Weather__days">
              {activeCity.list &&
                activeCity.list.map(item => <Day key={item.dt} item={item} />)}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: getLoading(state),
  citiesList: getCitiesList(state),
  activeCity: getActiveCity(state)
});

const mapDispatchToProps = {
  getCityRequest,
  getCitiesRequest,
  removeCityRequest,
  updateCityRequest,
  selectCityRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
