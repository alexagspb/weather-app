import React, { PureComponent } from "react";
import {
  getWeatherRequest,
  removeWeatherRequest,
  getCities
} from "../../ducks/weather";
import { getActiveId } from "../../ducks/activate";
import { connect } from "react-redux";

class Weather extends PureComponent {
  state = { city: "" };

  handleInputChange = e => {
    this.setState({ city: e.target.value });
  };

  handleKeyPress = e => {
    const { city } = this.state;
    const { getWeatherRequest } = this.props;
    if (e.key === "Enter") {
      getWeatherRequest(city);
      this.setState({ city: "" });
    }
  };

  async componentDidMount() {
    console.log("componentDidMount");
    this.props.getWeatherRequest("Belgorod");
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
    this.props.removeWeatherRequest(id);
  };

  render() {
    const { city } = this.state;
    const { cities, activeId } = this.props;

    return (
      <div className="container">
        <input
          placeholder="Введите город"
          value={city}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <p>Для продолжения нажмите Enter</p>

        {cities &&
          cities.map(item => (
            <div key={item.id}>
              <h2 className={`${activeId === item.id ? "active" : ""}`}>
                {item.name}
                <span onClick={() => this.removeCity(item.id)}>X</span>
              </h2>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cities: getCities(state),
  activeId: getActiveId(state)
});

const mapDispatchToProps = { getWeatherRequest, removeWeatherRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
