import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Spinner from "react-svg-spinner";

import "./Weather.css";

import Input from "../Input";
import City from "../City";
import Day from "../Day";

import {
  getCityRequest,
  getCitiesRequest,
  removeCityRequest,
  updateCityRequest,
  selectCityRequest,
  getCitiesList,
  getActiveCity,
  getError
} from "../../ducks/cities";

import { getLoading } from "../../ducks/loading";

class Weather extends PureComponent {
  async componentDidMount() {
    this.props.getCitiesRequest();

    const { lat, lon } = await this.getcurrentLocation();
    console.log(lat, lon);
    //Если получили координаты текущего местоположения - запрашиваем погоду по координатам
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
    const {
      loading,
      error,
      citiesList,
      activeCity,
      getCityRequest
    } = this.props;

    return (
      <div className="weather">
        <Input getCityRequest={getCityRequest} />
        <div className="weather__error">{error}</div>

        {loading ? (
          <div className="spinner row justify-content-md-center">
            <Spinner size="64px" color="blue" gap={5} />
          </div>
        ) : (
          <div>
            <div className="weather__cities">
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
            <div className="weather__days">
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
  error: getError(state),
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
