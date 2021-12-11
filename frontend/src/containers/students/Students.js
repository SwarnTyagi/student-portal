import React from "react";

import Table from "../../components/Table/Table";

const COLUMNS = [
  { name: "name", title: "Name" },
  { name: "age", title: "Age" },
  { name: "course", title: "Course" },
];

const DATA = [{ name: "Swarn", age: 25, course: "MBA" }];
const Student = () => {
  return (
    <div>
      Welcome To Students Page
      <Table headerColumns={COLUMNS} data={DATA} />
    </div>
  );
};
export default Student;
