import React, { useState } from "react";
import Accordion from "./../../components/accordion/Accordion";
import Card from "../../components/Card/Card";
import UserService from "../../services/UserService";

const USER_DATA = [
  { id: "panel1", wrapText: "General Settings", content: "Good to see you" },
  { id: "panel2", wrapText: "Profile", content: "Hello User" },
  { id: "panel3", wrapText: "Timetable", content: "Science" },
];

const userService = new UserService();
export default function User() {
  const [expanded, setExpanded] = useState(false);
  const [userData, setUserData] = useState([]);
  const onPanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const fetchUser = async () => {};
  return (
    <div>
      <div>
        {USER_DATA.map((ele) => {
          return (
            <Accordion
              id={ele.id}
              wrapText={ele.wrapText}
              content={ele.content}
              onPanelChange={onPanelChange(ele.id)}
              expanded={expanded === ele.id}
            />
          );
        })}
      </div>
      {/* <Card
        header=""
        body={}
        footer={}
        onClick={}
      /> */}
    </div>
  );
}
