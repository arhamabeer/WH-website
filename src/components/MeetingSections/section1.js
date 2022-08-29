import React from "react";
import "../../screens/MeetingPage/assets/styles/meeting_page.css";
// import "./assets/styles/meeting_page.css";

export default function Section1({ location }) {
  return (
    <section className="booking1-section">
      <h1 style={{ textAlign: "center" }}>Select Location</h1>
      <div className="location-img-div">
        {location.map((v, i) => {
          return (
            <div className="mr-img" key={i}>
              <div className="mr-img1">
                <h3 className="mr-img_h3">{v.name}</h3>
                <img
                  className="mr-img_img"
                  width="500px"
                  height="300px"
                  style={{
                    borderRadius: 20,
                    boxShadow: "1px 1px 10px #c1242b",
                  }}
                  src={v.img}
                />
              </div>
            </div>
          );
        })}
        {/* {this.state.selectedLocationTab === "Gulshan"
        ? this.state.GulshanImg.map((v) => (
           
          ))
        : this.state.selectedLocationTab === "Tipu Sultan"
        ? this.state.TipuSultanImg.map((v) => (
            <div className="mr-img">
              <img
                width="500px"
                height="300px"
                style={{
                  borderRadius: 20,
                  boxShadow: "7px 7px 10px grey",
                }}
                src={v.img}
              />
            </div>
          ))
        : this.state.selectedLocationTab === "Ittehad"
        ? this.state.IttehadImg.map((v) => (
            <div className="mr-img">
              <img
                width="500px"
                height="300px"
                style={{
                  borderRadius: 20,
                  boxShadow: "7px 7px 10px grey",
                }}
                src={v.img}
              />
            </div>
          ))
        : this.state.MetropoleImg.map((v) => (
            <div className="mr-img">
              <h3 className="mr-img_h3">Metropole Location, Karachi</h3>
              <img
                className="mr-img_img"
                width="500px"
                height="300px"
                style={{
                  borderRadius: 20,
                  boxShadow: "7px 7px 10px grey",
                }}
                src={v.img}
              />
            </div>
          ))} */}
      </div>
      {/* <div className="basicInfo-div">
      <h2>Select Location</h2>
      <div className="location-div">
        {location.map((v) => (
          <div
            style={
              v.name === this.state.selectedLocation
                ? {
                    backgroundColor: "#c1242b",
                    boxShadow: "2px 2px 7px #65278a",
                  }
                : {}
            }
            onClick={
              v.name === "Zamzama" ? null : () => this.handleLocation(v)
            }
            className="location-inner-div"
          >
            <h4>{v.name}</h4>
            <p>
              {v.area} &nbsp;
              {v.name === "Zamzama" && "(coming soon...)"}
            </p>
          </div>
        ))}
      </div>
      <div>
        <label className="book-label">Select Room</label>
        <select
          onChange={(e) => {
            this.handleInputRoomChange("room", e.target.value);
          }}
          className="basic-info-sel"
        >
          <option selected value="Choose meeting room" disabled>
            Choose meeting room
          </option>
          <option value="1">1 (4-6 persons)</option>
          <option value="2">2 (4 persons)</option>
        </select>
      </div>
      <div>
        <label className="book-label">Name</label>
        <input
          onChange={(e) => {
            this.handleInputChange(
              "fullname",
              e.target.value,
              nameCheck,
              "nameValid"
            );
          }}
          className="basic-info-inputs"
          type="text"
          style={
            this.state.errorMessage.nameValid
              ? { border: "1px solid green" }
              : { border: "1px solid red" }
          }
        />
      </div>
      <div>
        <label className="book-label">Company</label>
        <input
          onChange={(e) => {
            this.handleInputChange(
              "company",
              e.target.value,
              cityCheck,
              "cityValid"
            );
          }}
          className="basic-info-inputs"
          type="text"
          style={
            this.state.errorMessage.cityValid
              ? { border: "1px solid green" }
              : { border: "1px solid red" }
          }
        />
      </div>
      <div>
        <label className="book-label">Number</label>
        <input
          onChange={(e) => {
            this.handleInputChange(
              "phone_number",
              e.target.value,
              phoneCheck,
              "phoneValid"
            );
          }}
          style={
            this.state.errorMessage.phoneValid
              ? { border: "1px solid green" }
              : { border: "1px solid red" }
          }
          value={this.state.phone_number}
          className="basic-info-inputs"
          type="text"
        />
      </div>
      <div>
        <button
          className="basic-info-btn"
          onClick={() => this.handleNextBtn()}
        >
          Next
        </button>
      </div>
    </div> */}
    </section>
  );
}
