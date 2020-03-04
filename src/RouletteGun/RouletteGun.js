import React from "react";

export default class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false
  };

  compentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({ spinningTheChamber: true });
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      });
    });
  };
  //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

  render() {
    return (
      <div className="RouletteGun">
        <button onClick={this.handleClick}>Pull The Trigger</button>
        <p>{result}</p>
      </div>
    );
  }
}
