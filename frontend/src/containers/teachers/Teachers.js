import React, { useState } from "react";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Dialog from "../../components/Dialog/Dialog";
import TextField from "@mui/material/TextField";

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
  {
    facultyID: "CSE-132",
    name: "Dr Asha Malik",
    course: "Automata Theory",
    rating: "4",
  },
  {
    facultyID: "ME-234",
    name: "Dr Nishtha Chandel",
    course: "Strength of Materials",
    rating: "4",
  },
];

const Teachers = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const onClickTeacher = (data) => {
    navigate("/teachers/details", { state: data });
  };
  const onSubmit = () => {
    setIsOpen(false);
  };
  const onCancel = () => {
    setIsOpen(false);
  };
  const onAdd = () => {
    setIsOpen(true);
  };
  return (
    <div>
      Welcome to Teachers Page
      <Button onClick={onAdd} text={"ADD"} />
      <Dialog
        content="This is my content"
        title="Teachers Information"
        okText="Confirm"
        cancelText="Cancel"
        open={isOpen}
        onOk={onSubmit}
        onCancel={onCancel}
      >
        {" "}
        <TextField />
        <TextField />
      </Dialog>
      <Table headerColumns={COLUMN} data={DATA_1} onRowClick={onClickTeacher} />
    </div>
  );
};
export default Teachers;
