import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";

const TeacherDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { facultyID, name, course, rating } = state;
  const onGoBack = () => {
    navigate("/teachers");
  };
  return (
    <Card
      header="Teacher Details"
      body={name + "/" + facultyID}
      footer={course + "/" + rating}
      buttonText={"Go Back"}
      onClick={onGoBack}
    />
  );
};
export default TeacherDetails;
