import React from "react";
import Table from "../../components/Table/Table";

const COLUMN = [
  { name: "facultyID", title: "ID" },
  { name: "name", title: "Name" },
  { name: "course", title: "Course" },
  { name: "rating", title: "Faculty Rating" },
];
const DATA_1 = [
  {
    facultyID: "ECE-141",
    name: "Dr Shraddha Kapoor",
    course: "Digital Electronics",
    rating: "5",
  },
];
const Teachers = () => {
  return (
    <div>
      Welcome to Teachers Page
      <Table headerColumns={COLUMN} data={DATA_1}></Table>
    </div>
  );
};
export default Teachers;
