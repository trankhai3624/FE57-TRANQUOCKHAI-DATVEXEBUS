import React, { Component } from "react";

class BookingItem extends Component {
  render() {
    return (
      <div key={this.props.item.SoGhe}>
        <p className="text-left">
          {this.props.item.index} Ghế: số {this.props.item.SoGhe} $100{" "}
          <span>[Hủy]</span>
        </p>
      </div>
    );
  }
}

export default BookingItem;
