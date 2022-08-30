import React, { Component, Fragment } from "react";
import "./assets/styles/meeting_page.css";
import { emailCheck, nameCheck, phoneCheck, cityCheck } from "./validation";

import ReactCardFlip from "react-card-flip";
import $ from "jquery";
import moment from "moment";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { TimePicker } from "@syncfusion/ej2-react-calendars";
//Nav
import Nav from "../../components/Nav/index";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/BackDrop/BackDrop";

//Footer
import Footer from "../../components/Footer/index";

// Book A Tour Modal
import BookATourModal from "../../components/BookATourModal/index";

//database
import { GetAllLocation } from "../../Services/Admin-Service";
import { BookMeeting, GetAllMeetings } from "../../backend/logic";

//credit-card
import Cards from "react-credit-cards";
import CreditCardInput from "react-credit-card-input";
import "react-credit-cards/es/styles-compiled.css";
import Section1 from "../../components/MeetingSections/section1";
import Section2 from "../../components/MeetingSections/Section2";

export class FlipElement extends React.Component {
  render() {
    return (
      <ReactCardFlip
        isFlipped={this.props.isFlipped}
        flipDirection="horizontal"
      >
        {this.props.frontComponent}
        {this.props.backComponent}
      </ReactCardFlip>
    );
  }
}

export default class MeetingPage extends Component {
  constructor() {
    super();
    this.state = {
      blur1: true,
      blur2: false,
      blur3: false,
      isFlipped1: false,
      isFlipped2: false,
      isFlipped3: false,
      isFlipped4: false,
      bookATour: false,
      sideDrawerOpen: false,
      errorMessage: {
        name: "",
        nameValid: false,
        city: "",
        cityValid: false,
        email: "",
        emailValid: false,
        phone: "",
        phoneValid: false,
      },
      location: [
        {
          name: "Metropole",
          area: "Shahrah-e-Faisal",
          img: require("./assets/images/Metropole.png"),
        },
        {
          name: "Tipu Sultan",
          area: "Tipu sultan road",
          img: require("./assets/images/Tipu.png"),
        },
        {
          name: "Ittehad",
          area: "DHA",
          img: require("./assets/images/Ittehad.jpg"),
        },
        {
          name: "Gulshan",
          area: "Rashid minhas road",
          img: require("./assets/images/Gulshan.png"),
        },
        // {
        //   name: "Ittehad",
        //   area: "DHA",
        //   img: require("./assets/images/lobby.png"),
        // },
      ],
      MetropoleImg: [
        { img: require("./assets/images/lobby.png") },
        { img: require("./assets/images/office.jpeg") },
        { img: require("./assets/images/last.png") },
        { img: require("./assets/images/boxOut.png") },
      ],
      TipuSultanImg: [
        { img: require("./assets/images/oaw.png") },
        { img: require("./assets/images/aridesk.png") },
        { img: require("./assets/images/office.jpg") },
        { img: require("./assets/images/last.png") },
      ],
      GulshanImg: [
        { img: require("./assets/images/last.png") },
        { img: require("./assets/images/coffeeTable.png") },
        { img: require("./assets/images/meet1.png") },
        { img: require("./assets/images/office.jpg") },
      ],
      IttehadImg: [
        { img: require("./assets/images/it-1.jpg") },
        { img: require("./assets/images/it-2.jpg") },
        { img: require("./assets/images/it-3.jpg") },
        { img: require("./assets/images/it-4.jpg") },
      ],

      selectLocationArea: "",
      selectedLocation: "",
      selectedLocationTab: "Metropole",
      fullname: "",
      company: "",
      phone_number: "",
      room: "",
      date: "",
      Stime: "",
      Etime: "",
      metroPin:
        "https://www.google.com/maps/place/Work+Hall/@24.8509116,67.0317582,21z/data=!4m5!3m4!1s0x3eb33f03fc15d72f:0xe4242b9cc169561c!8m2!3d24.8509849!4d67.0315533",
      tipuPin:
        "https://www.google.com/maps/place/24%C2%B052'23.2%22N+67%C2%B004'56.2%22E/@24.8728556,67.0819501,19.75z/data=!4m5!3m4!1s0x0:0xf8dc4d548521532!8m2!3d24.873119!4d67.082266",
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
      fetchedMeetings: "",
    };
    this.secRef = React.createRef();
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  handleClick = (i) => {
    // e.preventDefault();
    // console.log(e);
    this.setState({
      [[`isFlipped${i}`]]: !this.state[`isFlipped${i}`],
    });
  };
  FetchLocation = () => {
    GetAllLocation("all").then((docs) => {
      // this.setState({ locations: docs, selectLocations: docs[0].locName });
    });
  };

  handleLocationSelect = (data) => {
    this.setState({ selectedLocation: data.name });
  };

  componentDidMount() {
    GetAllMeetings(this);
    this.FetchLocation();
    $(".button.primary").click(function () {
      for (let index = 0; index < 34; index++) {
        $(".button").append('<span class="particles-circle">' + "</span>");
      }
      if (!$(".button").hasClass("active")) {
        $(this).parent().stop().addClass("active");
        setTimeout(function () {
          $(".button").parent().removeClass("active");
          $(".particles-circle").remove();
        }, 1000);
      }
    });
    (function ($) {
      $.fn.visible = function (partial) {
        var $t = $(this),
          $w = $(window),
          viewTop = $w.scrollTop(),
          viewBottom = viewTop + $w.height(),
          _top = $t.offset().top,
          _bottom = _top + $t.height(),
          compareTop = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

        return compareBottom <= viewBottom && compareTop >= viewTop;
      };
    })($);

    var win = $(window);

    var allMods = $(".module");

    allMods.each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("already-visible");
      }
    });

    win.scroll(function (event) {
      allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("come-in");
        }
      });
    });
    setTimeout(() => {
      this.handleClick(1);
    }, 1500);
    setTimeout(() => {
      this.handleClick(2);
    }, 2000);
    setTimeout(() => {
      this.handleClick(3);
    }, 2500);
    setTimeout(() => {
      this.handleClick(4);
    }, 3000);
  }

  handleLocation = (e) => {
    this.setState({ selectedLocation: e.name, selectLocationArea: e.area });
  };
  handleLocationTab = (e) => {
    this.setState({ selectedLocationTab: e.name });
  };
  handleInputRoomChange = (target, value) => {
    this.setState({ [target]: value });
  };
  handleInputChange = (target, value, checkValidation, validationCheck) => {
    const { error, isValid } = checkValidation(value);
    if (target === "phone_number") {
      console.log(target);
      this.setState({
        [target]: value,
        errorMessage: {
          ...this.state.errorMessage,
          [target]: "",
          [validationCheck]: true,
        },
      });
      setTimeout(
        () =>
          this.state.phone_number !== " " &&
          this.setState({ phoneTErr: false }),
        10
      );
    }
    if (isValid) {
      if (target === "fullname") {
        // let result = value.toUpperCase(value);
        this.setState({
          [target]: value,
          errorMessage: {
            ...this.state.errorMessage,
            [target]: "",
            [validationCheck]: true,
          },
        });
        setTimeout(
          () =>
            this.state.fullname !== "" && this.setState({ nameTErr: false }),
          10
        );

        // console.log(this.state.name);
      } else {
        setTimeout(() => {
          this.setState({
            [target]: value,
            errorMessage: {
              ...this.state.errorMessage,
              [target]: "",
              [validationCheck]: true,
            },
          });
        }, 10);
      }
    } else {
      this.setState({
        errorMessage: {
          ...this.state.errorMessage,
          [target]: error,
          [validationCheck]: false,
        },
      });
    }
  };
  handleNextBtn = () => {
    let {
      selectedLocation,
      selectLocationArea,
      fullname,
      phone_number,
      company,
      room,
    } = this.state;
    if (
      selectedLocation === "" ||
      selectLocationArea === "" ||
      fullname === "" ||
      phone_number === "" ||
      company === "" ||
      room === ""
    ) {
      alert("Fill all");
    } else if (
      !this.state.errorMessage.nameValid ||
      !this.state.errorMessage.cityValid ||
      !this.state.errorMessage.phoneValid
    ) {
      alert("Enter Valid Inputs");
      console.log(this.state.errorMessage);
    } else {
      this.setState({ blur2: false });
      setTimeout(() => {
        this.secRef.current.scrollIntoView();
      }, 100);
    }
  };
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputCardChange = (e) => {
    const { name, value } = e.target;

    console.log(value, name);
    if (name === "number" || name === "cvc") {
      const re = /^[0-9\b]+$/;
      if (value === "" || re.test(value)) {
        console.log("if=> ", value);
        this.setState({ [name]: value });
      } else {
        this.setState({ [name]: this.state[name] });
      }
    } else if (name === "expiry") {
      this.setState({ [name]: value.replace(/^(\d{2})(\d{2})/, "$1/$2") });
    } else {
      this.setState({ [name]: value });
    }
  };

  BookNow = () => {
    let {
      room,
      date,
      Stime,
      Etime,
      selectedLocation,
      fullname,
      company,
      phone_number,
      errorMessage,
    } = this.state;
    const slot = {
      room,
      date,
      Stime,
      Etime,
      selectedLocation,
      fullname,
      company,
      phone_number,
    };
    let regExp = /^[0-9 :]+$/;
    if (
      date === "" ||
      Stime === "" ||
      Etime === "" ||
      !errorMessage.nameValid ||
      !errorMessage.cityValid ||
      !errorMessage.phoneValid
    ) {
      // console.log();
      alert("All fields are required");
    } else if (!regExp.test(Stime) || !regExp.test(Etime)) {
      alert("Wrong time format");
    } else {
      // let sth = this.state.Stime.split(":");
      // let sth1 = sth.length > 1 ? sth[1].split(" ") : "";
      // let startMili = +sth[0] * (60000 * 60) + +sth1[0] * 60000;
      // let eth = this.state.Etime.split(":");
      // let eth1 = eth.length > 1 ? eth[1].split(" ") : "";
      // let endMili = +eth[0] * (60000 * 60) + +eth1[0] * 60000;
      // if (endMili - startMili > 7200000) {
      //   alert("You can book for max 2 hours");
      // } else if (endMili - startMili <= 0) {
      // }
      // this.setState({ blur3: false });
      BookMeeting(slot, this);
    }
    // console.log(Stime, Etime);
  };
  parseTime = (s) => {
    var part = s.match(/(\d+):(\d+)(?: )?(am|pm)?/i);
    var hh = parseInt(part[1], 10);
    var mm = parseInt(part[2], 10);
    var ap = part[3] ? part[3].toUpperCase() : null;
    if (ap === "AM") {
      if (hh == 12) {
        hh = 0;
      }
    }
    if (ap === "PM") {
      if (hh != 12) {
        hh += 12;
      }
    }
    const time = hh + ":" + mm + ":" + "00";
    return time;
  };
  render() {
    let { location, fetchedMeetings, locImgs } = this.state;
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    var meetCheck = fetchedMeetings.length
      ? fetchedMeetings.filter((v) => {
          return (
            v.selectedLocation === this.state.selectedLocation &&
            moment(v.date)
              .format("MMM DD, YYYY")
              .includes(moment(new Date()).format("MMM DD, YYYY"))
          );
        })
      : "Loading...";

    // fetchedMeetings.length &&
    //   fetchedMeetings.sort((a, b) => new Date(a.date) - new Date(b.date));

    fetchedMeetings.length &&
      fetchedMeetings.sort((a, b) => a.Stime.localeCompare(b.Stime));

    // console.log("State=> ", this.state.selectedLocation);
    // console.log("State=> ", meetCheck.length, meetCheck, fetchedMeetings);

    return (
      <div>
        {
          <BookATourModal
            open={this.state.bookATour}
            close={() => {
              this.setState({ bookATour: false });
            }}
          />
        }
        {/* NAV SECTION */}
        <Nav
          page="RML"
          activeScreen="Meetings"
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <section className="hero module">
          <div className="wrapper">
            <div className="left">
              <div className="box">
                <FlipElement
                  isFlipped={this.state.isFlipped1}
                  frontComponent={
                    <img
                      className="child"
                      onClick={() => {
                        this.handleClick(1);
                      }}
                      src={require("./assets/images/black.jpg")}
                    />
                  }
                  backComponent={
                    <img
                      className="child"
                      onClick={() => {
                        this.handleClick(1);
                      }}
                      src={require("./assets/images/plans (1).jpg")}
                    />
                  }
                />
              </div>
              <div className="box zac ">
                <FlipElement
                  isFlipped={this.state.isFlipped2}
                  frontComponent={
                    <img
                      className="child"
                      onClick={() => {
                        this.handleClick(2);
                      }}
                      src={require("./assets/images/lightgrey.jpg")}
                    />
                  }
                  backComponent={
                    <img
                      className="child"
                      onClick={() => {
                        this.handleClick(2);
                      }}
                      src={require("./assets/images/plans (2).jpg")}
                    />
                  }
                />
              </div>
              <div className="box">
                <FlipElement
                  isFlipped={this.state.isFlipped3}
                  frontComponent={
                    <img
                      className="child"
                      onClick={() => {
                        this.handleClick(3);
                      }}
                      src={require("./assets/images/darkred.jpg")}
                    />
                  }
                  backComponent={
                    <img
                      className="child"
                      onClick={() => {
                        this.handleClick(3);
                      }}
                      src={require("./assets/images/plans (3).jpg")}
                    />
                  }
                />
              </div>
              <div className="box zac">
                <FlipElement
                  isFlipped={this.state.isFlipped4}
                  frontComponent={
                    <img
                      className="child"
                      onClick={() => {
                        this.handleClick(4);
                      }}
                      src={require("./assets/images/gray.jpg")}
                    />
                  }
                  backComponent={
                    <img
                      className="child"
                      onClick={() => {
                        this.handleClick(4);
                      }}
                      src={require("./assets/images/4.jpg")}
                    />
                  }
                />
              </div>
            </div>
            {/* HERO SECTION - RIGHT  */}
            <div className="right hero-right-planspage">
              <br />
              <h1 className="inline">re</h1>
              <div className="line"></div>
              <br />
              <h1>build</h1>
              <h5>your dream</h5>
              <p className="font-sm font-gray">
                Workhall is a physical social network powered by diversity in
                backgrounds and beliefs. By inclusion, we strengthen each other
                and provide a solid foundation for progress.
              </p>

              <div className="button-area">
                <a
                  className="button primary btn"
                  onClick={() => {
                    this.setState({ bookATour: !this.state.bookATour });
                  }}
                >
                  BOOK A TOUR
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* STEPS SECTION */}
        <section className="steps module">
          <div className="steps-area">
            <span className="s">01.</span>
            <span className="divider"></span>
            <span>02.</span>
            <span className="divider"> </span> <span>03.</span>
            <span className="divider"></span>
            <span>04.</span>
          </div>
          <div className="step-gap-area"></div>
        </section>
        {/*  LOCATION AND PLANS SECTION  */}
        <section className="welcome-section">
          <div className="wrapper mini">
            <div style={{ position: "relative" }}>
              {/*<div class="div-signature">
           <span class="signature-text" type="text" > ℯ𝓍𝓅𝓇ℯ𝓈𝓈</span>
                  </div>*/}
              <div style={{ marginTop: -100 }}>
                <div className="locations-and-plans-title-area module">
                  <p>
                    <h1>Book</h1> <h1 className="color-primary"> a Meeting</h1>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="location-img-tab">
          {location.map((v) => (
            <div
              style={
                v.name === this.state.selectedLocationTab
                  ? {
                      backgroundColor: "#c1242b",
                      boxShadow: "2px 2px 7px #65278a",
                    }
                  : {}
              }
              onClick={
                v.name === "Zamzama" ? null : () => this.handleLocationTab(v)
              }
              className="location-inner-div-tab"
            >
              <h4>{v.name}</h4>
            </div>
          ))}
        </div> */}
        <Section1
          location={location}
          handleLocationSelect={this.handleLocationSelect}
          ctx={this}
        />
        <Section2 ctx={this} meetCheck={meetCheck} />
        {/* STEPS SECTION */}

        <div style={{ width: "100%", marginBottom: 50 }}></div>

        {/* STEPS SECTION */}
        <section className="steps module">
          <div className="steps-area">
            <span>01.</span>
            <span className="divider"></span>
            <span className="s">02.</span>
            <span className="divider"> </span> <span>03.</span>
            <span className="divider"></span>
            <span>04.</span>
          </div>
          <div className="step-gap-area"></div>
        </section>
        <div
          style={!this.state.blur3 ? { display: "block" } : { display: "none" }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#c1242b",
              fontWeight: "bold",
              fontSize: 50,
            }}
          >
            Pay with card
          </h1>
          <section className="sec3-meeting">
            <div className="card-main-div">
              <form className="payment-form">
                <div className="basic-info-inputs-card">
                  <input
                    type="tel"
                    inputmode="numeric"
                    maxlength="19"
                    name="number"
                    placeholder="Card Number"
                    onChange={this.handleInputCardChange}
                    onFocus={this.handleInputFocus}
                    value={this.state.number}
                    className="basic-info-inputs card-number"
                  />
                </div>
                <div className="exp-cvv-div basic-info-inputs-card">
                  <input
                    type="text"
                    name="expiry"
                    maxlength="5"
                    placeholder="Card Expiry"
                    onChange={this.handleInputCardChange}
                    onFocus={this.handleInputFocus}
                    className="basic-info-inputs-exp basic-info-inputs"
                    value={this.state.expiry}
                  />
                  <input
                    type="tel"
                    name="cvc"
                    placeholder="CVV / CVC"
                    maxlength="4"
                    onChange={this.handleInputCardChange}
                    onFocus={this.handleInputFocus}
                    value={this.state.cvc}
                    className="basic-info-inputs-exp basic-info-inputs"
                  />
                </div>
                <div className="basic-info-inputs-card">
                  <input
                    className="basic-info-inputs"
                    type="text"
                    name="name"
                    placeholder="Name on Card"
                    onChange={this.handleInputCardChange}
                    onFocus={this.handleInputFocus}
                    defaultValue={this.state.fullname}
                  />
                </div>

                {/* <CreditCardInput
                cardNumberInputProps={{
                  value: this.state.number,
                  // onChange:(e)=> this.handleInputCardChange(e.target.value),
                }}
                cardExpiryInputProps={{
                  value: this.state.expiry,
                  onChange: (e) => this.handleInputCardChange(e.target.value),
                }}
                cardCVCInputProps={{
                  value: this.state.cvc,
                  onChange: this.handleInputCardChange,
                }}
                fieldClassName="input"
              /> */}
              </form>
            </div>
            <div className="credit-card-display">
              <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
              />
            </div>
          </section>
        </div>
        {/*  RAINBOW DIVIDER  */}
        <div className="rainbow-divider module"></div>
        {/* FOOTER SECTION */}
        <Footer />
      </div>
    );
  }
}
