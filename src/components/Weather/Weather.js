import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Spinner from "react-svg-spinner";

import City from "./City";
import Day from "./Day";

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
      getCityRequest(city);
      this.setState({ city: "" });
    }
  };

  async componentDidMount() {
    this.props.getCitiesRequest();
    this.props.getCityRequest("Belgorod");
    const { lat, lng } = await this.getcurrentLocation();
    console.log(lat, lng);

    // this.setState(prev => ({
    //   fields: {
    //     ...prev.fields,
    //     location: {
    //       lat,
    //       lng
    //     }
    //   },
    //   currentLocation: {
    //     lat,
    //     lng
    //   }
    // }));
  }

  getcurrentLocation() {
    if (navigator && navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          resolve({
            lat: coords.latitude,
            lng: coords.longitude
          });
        });
      });
    }
    // return {
    //   lat: 0,
    //   lng: 0
    // };
  }

  removeCity = name => {
    this.props.removeCityRequest(name);
  };

  updateCity = name => {
    this.props.updateCityRequest(name);
  };

  selectCity = name => {
    this.props.selectCityRequest(name);
  };

  render() {
    const { city } = this.state;
    const { loading, citiesList, activeCity } = this.props;

    return (
      <div className="Cities">
        <input
          placeholder="Введите город"
          value={city}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <p>Для продолжения нажмите Enter</p>

        {loading ? (
          <div className="spinner row justify-content-md-center">
            <Spinner size="64px" color="blue" gap={5} />
          </div>
        ) : (
          <div>
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

            {activeCity.list &&
              activeCity.list.map(item => <Day key={item.dt} item={item} />)}
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
