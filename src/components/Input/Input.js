import React, { PureComponent } from "react";

import "./Input.css";

class Input extends PureComponent {
  state = { city: "" };

  handleInputChange = e => {
    this.setState({ city: e.target.value });
  };

  handleKeyPress = e => {
    const { city } = this.state;
    const { getCityRequest } = this.props;

    if (e.key === "Enter" && city.trim().length) {
      getCityRequest({ location: city });
      this.setState({ city: "" });
    }
  };

  handleClick = e => {
    const { city } = this.state;
    const { getCityRequest } = this.props;

    if (city.trim().length) {
      getCityRequest({ location: city });
      this.setState({ city: "" });
    }
  };

  render() {
    const { city } = this.state;

    return (
      <div>
        <input
          className="weather__input"
          placeholder="Введите город"
          value={city}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick} className="weather__button">
          Добавить город
        </button>
      </div>
    );
  }
}

export default Input;
