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
  const [currentTeacher, setCurrentTeacher] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);
  const fetchTeachers = async () => {
    const { data } = await teacherSer.getTeachers();
    console.log("the teacher", data);
    setTeacherData(data.data);
  };
  // const onClickTeacher = (data) => {
  //   navigate("/teachers/details", { state: data });
  // };
  const onEditTeacher = async ({ _id }) => {
    const { data } = await teacherSer.getTeacherById(_id);
    setCurrentTeacher(data.data);
    setIsOpen(true);
  };
  const onDeleteTeacher = async (data) => {
    console.log("deleted teacher is", data);
    await teacherSer.deleteTeacher(data._id);
    fetchTeachers();
  };

  const onExpandTeacher = (data) => {
    console.log("the data on expansion is", data);
    navigate("/teachers/details", { state: data });
  };
  const onSubmit = async (formData) => {
    if (currentTeacher) {
      await teacherSer.updateTeacher(currentTeacher._id, formData);
      setIsOpen(false);
      setCurrentTeacher(null);
      fetchTeachers();
    } else {
      teacherSer.createTeacher(formData).then(() => {
        setIsOpen(false);
        fetchTeachers();
      });
    }
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
      <Form
        open={isOpen}
        onOk={onSubmit}
        onCancel={onCancel}
        teacher={currentTeacher || {}}
      />
      <Table
        headerColumns={COLUMN}
        data={teacherData}
        //onRowClick={onClickTeacher}
        hasActions
        hasEditAccess
        onClickEdit={onEditTeacher}
        hasDeleteAccess
        onClickDelete={onDeleteTeacher}
        onClickExpand={onExpandTeacher}
      />
    </div>
  );
};
export default Teachers;
