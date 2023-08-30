import React, { useEffect, useState } from "react";
import "./Booking.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Movies } from "../../../../../Movies_db";

function Booking() {
  const [dateBooking, SetdateBooking] = useState(new Date());
  const [ShowDate, SetShowDate] = useState(false);
  const [options, Setoptions] = useState([]);
  const [SelectOption, setSelectOption] = useState("");

  useEffect(() => {
    const Data = [...Movies].slice(0, 4);
    const modiData = Data.map((item) => ({
      ...item,
      value: item.Title,
      label: item.Title,
    }));
    Setoptions(modiData);
  }, []);

  return (
    <React.Fragment>
      <div className="booking">
        <div className="container">
          <div className="main-titel-section">
            <h1>Booking</h1>
          </div>
          <div className="input-box">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Jhon Doe" id="name" />
          </div>
          <div className="input-box">
            <label htmlFor="name">Your Email</label>
            <input type="email" placeholder="jhon.doe@email.com" />
          </div>
          <div className="input-box">
            <label htmlFor="your phone">Your Phone</label>
            <input type="phone" placeholder="498-343-5558" id="your phone" />
          </div>
          <div className="input-select">
            <label htmlFor="Date">
              {dateBooking === "" ? "Select an Date " : dateBooking.toString()}
            </label>
            <i
              className="fa-solid fa-calendar-days"
              onClick={() => SetShowDate(!ShowDate)}
              id="Date"
            />
            <Calendar
              date={dateBooking}
              onChange={(e) => SetdateBooking(e)}
              className={ShowDate ? "Date active" : "Date"}
            />
          </div>

          <Dropdown
            options={options}
            onChange={(e) => setSelectOption(e)}
            placeholder="Select movie"
          />

          <div className="input-box">
            <label htmlFor="your phone">number of people</label>
            <input
              type="number"
              placeholder="Enter the number "
              min={1}
              max={10}
            />
          </div>
          <div className="input-box">
            <button>Book your Ticket</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Booking;
