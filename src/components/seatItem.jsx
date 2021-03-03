import React, { Component } from "react";

class SeatItem extends Component {
  getSeatInfo = () => {
    this.props.selectSeat(this.props.busInfo);
    this.setState({
      isChosen: !this.state.isChosen,
    });
  };

  state = {
    isChosen: false,
  };
  render() {
    return (
      <div>
        {!this.props.seatStatus ? (
          <button
            className={`btn ${
              this.state.isChosen ? "btn-success" : "btn-secondary"
            }`}
            onClick={this.getSeatInfo}
          >
            {this.props.busInfo.SoGhe}
          </button>
        ) : (
          <button className="seatItem btn btn-info" onClick={this.getSeatInfo}>
            {this.props.busInfo.SoGhe}
          </button>
        )}
      </div>
    );
  }
}

export default SeatItem;
