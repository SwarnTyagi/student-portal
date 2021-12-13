import React from "react";
import { useNavigate } from "react-router-dom";

import Table from "../../components/Table/Table";

const COLUMNS = [
  { name: "name", title: "Name" },
  { name: "age", title: "Age" },
  { name: "course", title: "Course" },
];

const DATA = [
  { name: "Shrashi", age: 27, course: "Ph.D" },
  { name: "Swaranya", age: 3.6, course: "KG" },
  { name: "Swarn", age: 25, course: "MBA" },
];

const Student = () => {
  const navigate = useNavigate();

  const onClickStudent = (data) => {
    navigate("/students/details", { state: data });
  };
  const onColumnClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      Welcome To Students Page
      <Table
        headerColumns={COLUMNS}
        data={DATA}
        onRowClick={onClickStudent}
        onColumnClick={onColumnClick}
      />
    </div>
  );
};
export default Student;
