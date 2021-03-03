import React, { Component } from "react";
import SeatItem from "./seatItem";
import "./seatList.scss";
class SeatList extends Component {
  renderSeatItem() {
    const ItemUI = this.props.busInfo.map((item) => {
      return (
        <div className="col-3" key={item.SoGhe}>
          <SeatItem busInfo={item} selectSeat={this.props.selectSeat} />
        </div>
      );
    });
    return ItemUI;
  }
  render() {
    return (
      <div className="seatList bg-light">
        <div className="p-2">
          <p className="driver w-100 m-auto">Tài xế</p>
          <div className="row">{this.renderSeatItem()}</div>
        </div>
      </div>
    );
  }
}

export default SeatList;
