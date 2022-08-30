import React, { useState } from "react";
import moment from "moment";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
// import { emailCheck, nameCheck, phoneCheck, cityCheck } from "./validation";
import {
  emailCheck,
  nameCheck,
  phoneCheck,
  cityCheck,
} from "../../screens/MeetingPage/validation";

export default function Section2({ ctx, meetCheck }) {
  const [mapPins, setMapPins] = useState([
    "https://www.google.com/maps/place/Work+Hall/@24.8509422,67.0317135,21z/data=!4m5!3m4!1s0x3eb33f03fc15d72f:0xe4242b9cc169561c!8m2!3d24.8509849!4d67.0315533",
    "https://www.google.com/maps/place/Work+Hall/@24.8509422,67.0317135,21z/data=!4m5!3m4!1s0x3eb33f03fc15d72f:0xe4242b9cc169561c!8m2!3d24.8509849!4d67.0315533",
    "https://www.google.com/maps/place/Work+Hall/@24.8509422,67.0317135,21z/data=!4m5!3m4!1s0x3eb33f03fc15d72f:0xe4242b9cc169561c!8m2!3d24.8509849!4d67.0315533",
    "https://www.google.com/maps/place/Work+Hall/@24.8509422,67.0317135,21z/data=!4m5!3m4!1s0x3eb33f03fc15d72f:0xe4242b9cc169561c!8m2!3d24.8509849!4d67.0315533",
  ]);
  const [selectedPlan, setSelectedPlan] = useState("");

  const metroPlanImages = [
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/8.png"),
      capacity: "13-25 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "3 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
  ];
  const tipuPlanImages = [
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/8.png"),
      capacity: "13-25 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "3 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
  ];
  const ittehadPlanImages = [
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/8.png"),
      capacity: "13-25 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "3 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
  ];
  const gulshanPlanImages = [
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/8.png"),
      capacity: "13-25 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "3 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"),
      capacity: "1 person",
    },
  ];

  const handleSelectChange = (r, e) => {
    if (e === "Air") {
      setSelectedPlan(0);
    } else if (e === "Conference room") {
      setSelectedPlan(1);
    } else if (e === "Exclusive event space") {
      setSelectedPlan(2);
    } else if (e === "Meeting room") {
      setSelectedPlan(3);
    } else if (e === "Private office suite") {
      setSelectedPlan(4);
    } else if (e === "Virtual office address") {
      setSelectedPlan(5);
    } else if (e === "X") {
      setSelectedPlan(6);
    }
    ctx.handleInputRoomChange(r, e);
  };

  // console.log(selectedPlan, metroPlanImages);
  console.log(
    metroPlanImages[selectedPlan] !== undefined &&
      metroPlanImages[selectedPlan].img
  );

  // console.log(selectedPlan);
  return (
    <section
      style={!ctx.state.blur2 ? { display: "block" } : { display: "none" }}
      className="booking-section2"
      // selected={scnSec.selected}
      ref={ctx.secRef}
    >
      <a href="sec2" id="sec2"></a>
      <div className="booking-sec-main-div">
        <div style={{ width: "60%" }}>
          <h1 style={{ textAlign: "center" }}>Location</h1>
          <div className="meet-r">
            <div className="meet-r-i">
              <img
                width="400px"
                height="300px"
                // src={require("../../screens/MeetingPage/assets/images/mr1.png")}
                src={ctx.state.location
                  .filter((x) => x.name === ctx.state.selectedLocation)
                  .map((x) => x.img)}
                style={{
                  borderRadius: 20,
                  boxShadow: "1px 1px 10px #c1242b",
                }}
              />
              <h3>{ctx.state.selectedLocation}</h3>
              <a
                href={
                  ctx.state.selectedLocation === "Ittehad"
                    ? mapPins[2]
                    : ctx.state.selectedLocation === "Gulshan"
                    ? mapPins[3]
                    : ctx.state.selectedLocation === "Tipu Sultan"
                    ? mapPins[1]
                    : mapPins[0]
                }
              >
                Get Direction
              </a>
            </div>
            <div className="meet-r-i">
              <img
                width="400px"
                height="300px"
                // src={require("../../screens/MeetingPage/assets/images/mr1.png")}
                src={
                  ctx.state.selectedLocation === "Metropole"
                    ? metroPlanImages[selectedPlan] !== undefined &&
                      metroPlanImages[selectedPlan].img
                    : ctx.state.selectedLocation === "Ittehad"
                    ? ittehadPlanImages[selectedPlan] !== undefined &&
                      ittehadPlanImages[selectedPlan].img
                    : ctx.state.selectedLocation === "Gulshan"
                    ? gulshanPlanImages[selectedPlan] !== undefined &&
                      gulshanPlanImages[selectedPlan].img
                    : ctx.state.selectedLocation === "Tipu Sultan"
                    ? tipuPlanImages[selectedPlan] !== undefined &&
                      tipuPlanImages[selectedPlan].img
                    : require("../../screens/MeetingPage/assets/images/gray.jpg")
                }
                style={{
                  borderRadius: 20,
                  boxShadow: "1px 1px 10px grey",
                }}
              />
              <h3>{ctx.state.room}</h3>
              <h6>
                Capacity:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {metroPlanImages[selectedPlan] !== undefined &&
                    metroPlanImages[selectedPlan].capacity}
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="sec2-room">
          <div className="sec2-room-info">
            <div>
              <label className="book-label">Select Plan / Room</label>
              <select
                onChange={(e) => {
                  handleSelectChange("room", e.target.value);
                }}
                className="basic-info-sel"
              >
                <option selected value="Select Plan / Room" disabled>
                  Select Plan / Room
                </option>
                <option value="Air">Air</option>
                <option value="Conference room">Conference room</option>
                <option value="Exclusive event space">
                  Exclusive event space
                </option>
                <option value="Meeting room">Meeting room</option>
                <option value="Private office suite">
                  Private office suite
                </option>
                <option value="Virtual office address">
                  Virtual office address
                </option>
                <option value="X">X</option>
              </select>
            </div>
            <div>
              <label className="book-label">Name</label>
              <input
                onChange={(e) => {
                  ctx.handleInputChange(
                    "fullname",
                    e.target.value,
                    nameCheck,
                    "nameValid"
                  );
                }}
                className="basic-info-inputs"
                type="text"
                style={
                  ctx.state.errorMessage.nameValid
                    ? { border: "1px solid green" }
                    : { border: "1px solid red" }
                }
              />
            </div>
            <div>
              <label className="book-label">Company</label>
              <input
                onChange={(e) => {
                  ctx.handleInputChange(
                    "company",
                    e.target.value,
                    cityCheck,
                    "cityValid"
                  );
                }}
                className="basic-info-inputs"
                type="text"
                style={
                  ctx.state.errorMessage.cityValid
                    ? { border: "1px solid green" }
                    : { border: "1px solid red" }
                }
              />
            </div>
            <div>
              <label className="book-label">Number</label>
              <input
                onChange={(e) => {
                  ctx.handleInputChange(
                    "phone_number",
                    e.target.value,
                    phoneCheck,
                    "phoneValid"
                  );
                }}
                style={
                  ctx.state.errorMessage.phoneValid
                    ? { border: "1px solid green" }
                    : { border: "1px solid red" }
                }
                value={ctx.state.phone_number}
                className="basic-info-inputs"
                type="text"
              />
            </div>
            {/* <p>
            Room Size:{" "}
            <span style={{ fontSize: 20, fontWeight: "bold" }}>
              {ctx.state.room === "1" ? "4-6" : "4"}
            </span>
          </p>
          <p>
            Location:{" "}
            <span style={{ fontSize: 20, fontWeight: "bold" }}>
              Workhall {ctx.state.selectedLocation}&nbsp;(
              {ctx.state.selectLocationArea})
            </span>
          </p>
          <p>
            Pin:{" "}
            <a
              href={
                ctx.state.selectedLocation === "Metropole"
                  ? ctx.state.metroPin
                  : ctx.state.selectedLocation === "Tipu Sultan"
                  ? ctx.state.tipuPin
                  : ""
              }
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#c1242b",
                textDecoration: "underline",
              }}
              target="_black"
            >
              {ctx.state.selectedLocation}
            </a>
          </p>
          <p>I'd like to book meeting on</p> */}
            <div>
              <label className="book-label">Date</label>
              <input
                type="date"
                name="date"
                placeholder="dd-mm-yyyy"
                style={{ width: "92%", height: 40 }}
                className="basic-info-inputs"
                onChange={(date) => {
                  ctx.setState({ date: date.target.value });
                }}
              />
            </div>
            <div>
              <label className="book-label">From</label>

              <TimePickerComponent
                name="time"
                onBlur={(time) => {
                  ctx.setState({ Stime: time.target.value });
                }}
                placeholder="choose start time"
                format="HH:mm"
                step={30}
                className="basic-info-inputs time-picker"
              ></TimePickerComponent>
            </div>
            <div>
              <label className="book-label">To</label>
              <TimePickerComponent
                name="time"
                onBlur={(time) => {
                  ctx.setState({ Etime: time.target.value });
                }}
                placeholder="choose end time"
                format="HH:mm"
                step={30}
                className="time-picker"
              ></TimePickerComponent>
            </div>
            <div className="div-book-btn">
              <button
                onClick={() => ctx.BookNow()}
                className="basic-info-btn book-btn"
              >
                Proceed To Payment
              </button>
            </div>
          </div>
          <div className="sec2-room-bookings">
            <h1>Bookings for today</h1>
            <div className="meet-room-main">
              <div className="meet-room-sec">
                <div className="meet-room-sec-legend mrs0"></div>
                <div
                  className="meet-room-in"
                  style={{ backgroundColor: "#c1242b" }}
                >
                  Meeting room 1
                </div>
              </div>
              <div className="meet-room-sec">
                <div className="meet-room-sec-legend mrs1"></div>
                <div
                  className="meet-room-in"
                  style={{ backgroundColor: "#109C49" }}
                >
                  Meeting room 2
                </div>
              </div>
            </div>
            <ul className="ul-bookings">
              {meetCheck.length === 0 ? (
                <h3>No meetings yet</h3>
              ) : ctx.state.fetchedMeetings.length ? (
                ctx.state.fetchedMeetings.map((v, i) => {
                  return (
                    v.selectedLocation === ctx.state.selectedLocation &&
                    moment(v.date).format("MMM DD, YYYY") ===
                      moment(new Date()).format("MMM DD, YYYY") && (
                      <li
                        key={i}
                        style={
                          v.room === "2"
                            ? {
                                borderLeft: "7px solid #109C49",
                                background: "rgba(16, 156, 73, 0.2)",
                              }
                            : {
                                borderLeft: "7px solid #c1242b",
                                background: "rgba(193, 36, 43, 0.2)",
                              }
                        }
                        className={"li-bookings"}
                      >
                        <h6
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ fontWeight: "bold" }}>
                            {v.company}
                            &nbsp; &bull;&nbsp;
                          </span>
                          {v.fullname}
                        </h6>
                        <p>
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            {moment(v.Stime, "HH:mm:ss").format(
                              "hh:mm a"
                            )} - {moment(v.Etime, "HH:mm:ss").format("hh:mm a")}
                          </span>
                        </p>
                      </li>
                    )
                  );
                })
              ) : (
                <h3>Loading...</h3>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
