import React, { PureComponent } from "react";
import { getWeatherRequest } from "../../ducks/weather";
import { connect } from "react-redux";

class Login extends PureComponent {
  state = { token: "" };

  //   handleInputChange = event => {
  //     this.setState({ token: event.target.value });
  //   };

  //   handleKeyPress = e => {
  //     const { token } = this.state;
  //     const { authorize } = this.props;
  //     if (e.key === ENTER) {
  //       authorize(token);
  //     }
  //   };

  async componentDidMount() {
    console.log("componentDidMount");
    this.props.getWeatherRequest(55.755826, 37.6173);
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

  render() {
    // const { token } = this.state;
    // const { isAuthorized } = this.props;

    // if (isAuthorized) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div className="container">
        <h1>Weather</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //   cities: getCities(state)
});

const mapDispatchToProps = { getWeatherRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
