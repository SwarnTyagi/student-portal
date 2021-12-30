import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Form from "./TeacherForm";
import TeacherService from "../../services/TeacherService";

const COLUMN = [
  { name: "facultyID", title: "ID" },
  { name: "name", title: "Name" },
  { name: "course", title: "Course" },
  { name: "rating", title: "Faculty Rating" },
];
const teacherSer = new TeacherService();
const Teachers = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [teacherData, setTeacherData] = useState([]);
  useEffect(() => {
    fetchTeachers();
  }, []);
  const fetchTeachers = async () => {
    const { data } = await teacherSer.getTeachers();
    setTeacherData(data);
  };
  const onClickTeacher = (data) => {
    navigate("/teachers/details", { state: data });
  };
  const onSubmit = (formData) => {
    teacherSer.createTeacher(formData).then(() => {
      setIsOpen(false);
      fetchTeachers();
    });
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
      <Form open={isOpen} onOk={onSubmit} onCancel={onCancel} />
      <Table
        headerColumns={COLUMN}
        data={teacherData}
        onRowClick={onClickTeacher}
      />
    </div>
  );
};
export default Teachers;
