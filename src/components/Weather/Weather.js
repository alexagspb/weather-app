import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Spinner from "react-svg-spinner";

import {
  getCityRequest,
  removeCityRequest,
  getCities
} from "../../ducks/cities";
import { getLoading } from "../../ducks/loading";
import { getActiveId } from "../../ducks/active";

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
    console.log("componentDidMount");
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

  removeCity = id => {
    this.props.removeCityRequest(id);
  };

  render() {
    const { city } = this.state;
    const { loading, cities, activeId } = this.props;

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
          cities &&
          cities.map(item => (
            <div key={item.id}>
              <h2 className={`${activeId === item.id ? "active" : ""}`}>
                {item.name}
                <span onClick={() => this.removeCity(item.id)}>X</span>
              </h2>
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: getLoading(state),
  cities: getCities(state),
  activeId: getActiveId(state)
});

const mapDispatchToProps = { getCityRequest, removeCityRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
