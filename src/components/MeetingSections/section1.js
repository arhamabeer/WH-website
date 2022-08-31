import React from "react";
import "../../screens/MeetingPage/assets/styles/meeting_page.css";
// import "./assets/styles/meeting_page.css";

export default function Section1({ location, handleLocationSelect, ctx }) {
  return (
    <section
      className="booking1-section"
      style={ctx.state.blur1 ? { display: "flex" } : { display: "none" }}
    >
      <h1 style={{ textAlign: "center" }}>select location</h1>
      <div className="location-img-div">
        {location.map((v, i) => {
          return (
            <div className="mr-img" key={i}>
              <div
                className="mr-img1"
                onClick={() => {
                  handleLocationSelect(v);
                }}
              >
                <h3
                  className={
                    ctx.state.selectedLocation === "Metropole" && i === 0
                      ? "selected_loc_h mr-img_h3"
                      : ctx.state.selectedLocation === "Tipu Sultan" && i === 1
                      ? "selected_loc_h mr-img_h3"
                      : ctx.state.selectedLocation === "Ittehad" && i === 2
                      ? "selected_loc_h mr-img_h3"
                      : ctx.state.selectedLocation === "Gulshan" && i === 3
                      ? "selected_loc_h mr-img_h3"
                      : ctx.state.selectedLocation === "Zamzama" && i === 4
                      ? "selected_loc_h mr-img_h3"
                      : "mr-img_h3"
                  }
                >
                  {v.name}
                </h3>
                <img
                  className={
                    ctx.state.selectedLocation === "Metropole" && i === 0
                      ? "selected_loc mr-img_img"
                      : ctx.state.selectedLocation === "Tipu Sultan" && i === 1
                      ? "selected_loc mr-img_img"
                      : ctx.state.selectedLocation === "Ittehad" && i === 2
                      ? "selected_loc mr-img_img"
                      : ctx.state.selectedLocation === "Gulshan" && i === 3
                      ? "selected_loc mr-img_img"
                      : ctx.state.selectedLocation === "Zamzama" && i === 4
                      ? "selected_loc mr-img_img"
                      : "mr-img_img"
                  }
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
      </div>
    </section>
  );
}
