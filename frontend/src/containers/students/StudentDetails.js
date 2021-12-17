import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Card from "../../components/Card/Card";

const StudentDetails = () => {
  const navigate = useNavigate();

  const { state } = useLocation(),
    { name, age, course } = state;

  const onGoBack = () => {
    navigate("/students");
  };
  return (
    <div>
      <Card
        header="Student Details"
        body={name + "/" + age}
        footer={course}
        buttonText={"Go Back"}
        onClick={onGoBack}
      />
    </div>
  );
};

export default StudentDetails;
