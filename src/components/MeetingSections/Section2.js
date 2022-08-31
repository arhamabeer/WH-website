import React, { useState } from "react";
import moment from "moment";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
// import { emailCheck, nameCheck, phoneCheck, cityCheck } from "./validation";
import Gray from "../../screens/MeetingPage/assets/images/plans/gray.jpg";
import {
  emailCheck,
  nameCheck,
  phoneCheck,
  cityCheck,
} from "../../screens/MeetingPage/validation";

export default function Section2({ ctx, meetCheck }) {
  const [mapPins, setMapPins] = useState([
    "https://www.google.com/maps/place/Work+Hall/@24.8509422,67.0317135,21z/data=!4m5!3m4!1s0x3eb33f03fc15d72f:0xe4242b9cc169561c!8m2!3d24.8509849!4d67.0315533",
    "https://www.google.com/maps/place/Work+Hall/@24.8731703,67.0825536,20z/data=!4m5!3m4!1s0x3eb33bf3a119d935:0x86b25f4926b3a5d7!8m2!3d24.8730496!4d67.0823268",
    "https://www.google.com/maps/place/1Comm+-+Coworking+Space+Karachi/@24.8308306,67.0739651,21z/data=!4m5!3m4!1s0x3eb33d54afbcce2f:0xd13bf0238cabdec5!8m2!3d24.8308125!4d67.0738125",
    "https://www.google.com/maps/place/Motif+(Pvt.)+Ltd/@24.9373735,67.0864942,18z/data=!4m5!3m4!1s0x3eb33f4e0cb41e97:0x9293259464dace43!8m2!3d24.9360694!4d67.0877323",
    "https://www.google.com/maps/place/Motif+(Pvt.)+Ltd/@24.9373735,67.0864942,18z/data=!4m5!3m4!1s0x3eb33f4e0cb41e97:0x9293259464dace43!8m2!3d24.9360694!4d67.0877323",
  ]);
  const [selectedPlan, setSelectedPlan] = useState("");

  const metroPlanImages = [
    {
      img: require("../../screens/MeetingPage/assets/images/plans/metroAir.png"), // Air
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/metroCR.png"), // Conference
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/8.png"), // Event Space
      capacity: "3-30 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/metroMR.jpg"), // Meeting
      capacity: "4 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/metroPR.jpg"), //  Private Ofc
      capacity: "3-30 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/VO.png"), // Virtual Address
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/metroX.png"), // X
      capacity: "1 person",
    },
  ];
  const tipuPlanImages = [
    {
      img: require("../../screens/MeetingPage/assets/images/plans/tipuAir.jpg"), // Air
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"), // Conference
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/8.png"), // Event Space
      capacity: "13-25 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"), // Meeting
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/tipuPO.jpg"), //  Private Ofc
      capacity: "3 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/VO.png"), // Virtual Address
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/tipuAir.jpg"), // X
      capacity: "1 person",
    },
  ];
  const ittehadPlanImages = [
    {
      img: require("../../screens/MeetingPage/assets/images/plans/ittehadAir.jpg"), // Air
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/IttegadMR.jpg"), // Conference
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/8.png"), // Event Space
      capacity: "13-25 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/IttegadMR.jpg"), // Meeting
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"), //  Private Ofc
      capacity: "3 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/VO.png"), // Virtual Address
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/ittehadX.jpg"), // X
      capacity: "1 person",
    },
  ];
  const zamzamaPlanImages = [
    {
      img: require("../../screens/MeetingPage/assets/images/plans/zz4.png"), // Air
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/zz6.png"), // Conference
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/zz5.png"), // Event Space
      capacity: "13-25 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/zz6.png"), // Meeting
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/zz6-1.png"), //  Private Ofc
      capacity: "3 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/VO.png"), // Virtual Address
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/zz5-1.png"), // X
      capacity: "1 person",
    },
  ];
  const gulshanPlanImages = [
    {
      img: require("../../screens/MeetingPage/assets/images/plans/gsAir.jpg"), // Air
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/1.png"), // Conference
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/8.png"), // Event Space
      capacity: "13-25 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/gsMR.jpg"), // Meeting
      capacity: "4-6 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/gsPO.jpg"), //  Private Ofc
      capacity: "3 persons",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/VO.png"), // Virtual Address
      capacity: "1 person",
    },
    {
      img: require("../../screens/MeetingPage/assets/images/plans/gsAir.jpg"), // X
      capacity: "1 person",
    },
  ];
  const [id, setId] = useState(null);
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
  const timeslots = [
    { Stime: "7:00am-7:30am", id: 0 },
    { Stime: "7:30am-8:00am", id: 1 },
    { Stime: "8:00am-8:30am", id: 2 },
    { Stime: "8:30am-9:00am", id: 3 },
    { Stime: "9:00am-9:30am", id: 4 },
    { Stime: "9:30am-10:00am", id: 5 },
    { Stime: "10:00am-10:30am", id: 6 },
    { Stime: "10:30am-11:00am", id: 7 },
    { Stime: "11:00am-11:30am", id: 8 },
    { Stime: "11:30am-12:00pm", id: 9 },
    { Stime: "12:00pm-12:30pm", id: 10 },
    { Stime: "12:30pm-1:00pm", id: 11 },
    { Stime: "1:00pm-1:30pm", id: 12 },
    { Stime: "1:30pm-2:00pm", id: 13 },
    { Stime: "2:00pm-2:30pm", id: 14 },
    { Stime: "2:30pm-3:00pm", id: 15 },
    { Stime: "3:00pm-3:30pm", id: 16 },
    { Stime: "3:30pm-4:00pm", id: 17 },
    { Stime: "4:00pm-4:30pm", id: 17 },
    { Stime: "4:30pm-5:00pm", id: 19 },
    { Stime: "5:00pm-5:30pm", id: 20 },
    { Stime: "5:30pm-6:00pm", id: 21 },
    { Stime: "6:00pm-6:30pm", id: 22 },
    { Stime: "6:30pm-7:00pm", id: 23 },
    { Stime: "7:00pm-7:30pm", id: 24 },
    { Stime: "7:30pm-8:00pm", id: 25 },
    { Stime: "8:00pm-8:30pm", id: 26 },
    { Stime: "8:30pm-9:00pm", id: 27 },
    { Stime: "9:00pm-9:30pm", id: 28 },
    { Stime: "9:30pm-10:00pm", id: 29 },
    { Stime: "10:00pm-10:30pm", id: 30 },
    { Stime: "10:30pm-11:00pm", id: 31 },
    { Stime: "11:00pm-11:30pm", id: 32 },
    { Stime: "11:30pm-12:00am", id: 33 },
  ];

  const handleChange = (v) => {
    setId(v.id);
    // ctx.setState({ Stime: time.target.value });
    console.log(v);
  };

  // console.log(zamzamaPlanImages[selectedPlan]);

  return (
    <section
      style={ctx.state.blur2 ? { display: "block" } : { display: "none" }}
      className="booking-section2"
      // selected={scnSec.selected}
      ref={ctx.secRef}
    >
      <a href="sec2" id="sec2"></a>
      <div className="booking-sec-main-div">
        <div style={{ width: "60%" }} className="booking-sec-main-div-1st-div">
          {/* <h1 style={{ textAlign: "center" }}>location</h1> */}
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
                    : ctx.state.selectedLocation === "Zamzama"
                    ? mapPins[1]
                    : mapPins[0]
                }
                target="_blank"
              >
                Get directions
              </a>
            </div>
            <div className="meet-r-i">
              <img
                width="400px"
                height="300px"
                src={
                  selectedPlan !== ""
                    ? ctx.state.selectedLocation === "Metropole"
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
                      : ctx.state.selectedLocation === "Zamzama"
                      ? zamzamaPlanImages[selectedPlan] !== undefined &&
                        zamzamaPlanImages[selectedPlan].img
                      : zamzamaPlanImages[selectedPlan] === undefined
                      ? Gray
                      : Gray
                    : Gray
                }
                style={{
                  borderRadius: 20,
                  boxShadow: "1px 1px 10px grey",
                }}
              />
              <h3>{ctx.state.room || "-"}</h3>
              <h6>
                Capacity: &nbsp;
                {metroPlanImages[selectedPlan] !== undefined
                  ? metroPlanImages[selectedPlan].capacity
                  : "-"}
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
            {/* <div
              style={
                ctx.state.room !== "Meeting room" ? { display: "none" } : {}
              }
            >
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
            <div
              style={
                ctx.state.room !== "Meeting room" ? { display: "none" } : {}
              }
            >
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
            </div> */}
            <label className="book-label">Time</label>
            <div className="div-input-icon-date-sch" style={{}}>
              {timeslots.map((v) => {
                return (
                  <div
                    className="slots-time-picker"
                    onClick={() => handleChange(v)}
                    style={
                      v.id === id
                        ? { backgroundColor: "#c1242b", color: "#fff" }
                        : { background: "#fff" }
                    }
                  >
                    {v.Stime}
                  </div>
                );
              })}
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
