import React from "react";

import { db } from "./config";
import {
  appendSpreadsheet,
  academyEmail,
  appendSpreadsheetMeetings,
} from "../../src/components/AcademyRegister/googlesheet";

export const registerForm = (name, course, email, phone, history) => {
  const rxEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );

  if (!name || !course || !email || !phone) {
    alert("Please fill all required field");
  } else if (!rxEmail) {
    alert("Please enter valid email address");
  } else {
    db.ref(`register/students`)
      .push({
        name: name,
        course: course,
        email: email,
        phone: phone,
      })
      .then((success) => {
        // alert('Successfully Register')
        if (success) {
          window.open("/payment", "_self");
        }
      })
      .then(
        appendSpreadsheet({
          Name: name,
          Email: email,
          Phone: phone,
          Course: course,
        })
      )
      .then(academyEmail(name, email, course));
  }
};

// for Book a Meeting
const parseTime = (s) => {
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

export const BookMeeting = (slot, ctx) => {
  const {
    room,
    date,
    Stime,
    Etime,
    selectedLocation,
    fullname,
    company,
    phone_number,
  } = slot;
  let prevMeetings = [];
  let check = true;
  //   console.log(Stime, Etime);

  return new Promise((resolve, reject) => {
    if (
      !selectedLocation ||
      !room ||
      !date ||
      !Stime ||
      !Etime ||
      !fullname ||
      !company ||
      !phone_number
    ) {
      alert("All field are required");
    } else if (date || Stime || Etime) {
      var newStime = new Date(date + " " + parseTime(Stime)).getTime();
      var newEtime = new Date(date + " " + parseTime(Etime)).getTime();
      let diff = newEtime - newStime;
      console.log(diff);

      if (Stime == Etime) {
        alert("Start Time should be differ from End Time");
      } else if (newStime > newEtime) {
        alert("End Time should be select after the Start Time");
      } else if (diff > 7200000) {
        alert("You can book a room only for 2 hours");
      } else {
        db.ref(`allMeetings`).once("value", (snapShot) => {
          //   if (snapShot.exists()) {
          snapShot.forEach((e) => {
            prevMeetings.push(e.val());
          });
          if (prevMeetings.length > 0) {
            for (let i = 0; i < prevMeetings.length; i++) {
              let startTime = prevMeetings[i].Stime;
              let endTime = prevMeetings[i].Etime;
              let dbStime = new Date(
                date + " " + parseTime(startTime)
              ).getTime();
              let dbEtime = new Date(date + " " + parseTime(endTime)).getTime();
              if (
                selectedLocation == prevMeetings[i].selectedLocation
                // &&
                //   date == prevMeetings[i].date &&
                //   room == prevMeetings[i].room &&
                //   newStime >= dbStime &&
                //   newEtime <= dbEtime) ||
                // (newEtime <= dbEtime && newEtime >= dbStime)
              ) {
                if (
                  (date == prevMeetings[i].date &&
                    room == prevMeetings[i].room &&
                    newStime > dbStime &&
                    newStime < dbEtime) ||
                  (date == prevMeetings[i].date &&
                    room == prevMeetings[i].room &&
                    newEtime < dbEtime &&
                    newEtime > dbStime) ||
                  (date == prevMeetings[i].date &&
                    room == prevMeetings[i].room &&
                    newEtime == dbEtime &&
                    newStime == dbStime) ||
                  (date == prevMeetings[i].date &&
                    room == prevMeetings[i].room &&
                    newEtime == dbEtime &&
                    newStime < dbStime) ||
                  (date == prevMeetings[i].date &&
                    room == prevMeetings[i].room &&
                    newEtime > dbEtime &&
                    newStime == dbStime)
                ) {
                  // console.log("prevMeetings err => ", prevMeetings[i].fullname);
                  alert(
                    "Meeting has already been booked between this slot. Please Change your slot"
                  );
                  check = false;
                  break;
                }
              }
              console.log("loop => ");
            }
            console.log("SNAP 0 => ");
          }
          console.log("SNAP 1 =>  ");

          console.log("SNAP 2 => ", check);
          // } else {

          if (check) {
            // db.ref(`allMeetings`)
            //   .push(slot)
            //   .then((success) => {
            //     // appendSpreadsheetMeetings(slot);
            //     alert("Your meeting has been booked");
            //     resolve(success);
            //   })
            //   .catch((e) => alert("Some Thing Went Wrong", e));
            ctx.setState({ blur3: true, blur2: false });
            console.log("boooked......!!!", slot, prevMeetings);
          }
        });
      }
    } else {
      alert("outer booked");
    }
  });
};

export const GetAllMeetings = async (ctx) => {
  let prevMeetings = [];
  await db
    .ref("allMeetings")
    .orderByKey()
    .on("value", (snapShot) => {
      if (snapShot.exists()) {
        snapShot.forEach((e) => {
          prevMeetings.push(e.val());
        });
      }
    });
  ctx.setState({
    fetchedMeetings: prevMeetings,
  });
};
