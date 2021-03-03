import React, { Component } from "react";
import "./booking.scss";
import BookingItem from "./bookingItem";
class BookedSeat extends Component {
  renderBookingSeat() {
    const bookingSeatUI = this.props.bookingList.map((item) => {
      // console.log(item);
      return <BookingItem item={item} key={item.SoGhe} />;
    });
    // console.log(this.props.bookingList);
    return bookingSeatUI;
  }

  render() {
    return (
      <div className="booking bg-light text-dark p-2">
        <h3 className="text-left">
          Danh sách ghế đã đặt ({this.props.totalSeat})
        </h3>
        {this.renderBookingSeat()}
      </div>
    );
  }
}

export default BookedSeat;
