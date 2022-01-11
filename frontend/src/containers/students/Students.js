import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StudentService from "../../services/StudentService";
import Table from "../../components/Table/Table";
import Form from "./StudentForm";
import Button from "./../../components/Button/Button";
import usePermission from "./../../hooks/usePermission";
import useActions from "./../../hooks/useActions";
import * as studentActions from "./../../redux/actions/studentActions";

const COLUMNS = [
  { name: "name", title: "Name" },
  { name: "age", title: "Age" },
  { name: "course", title: "Course" },
];

const studentService = new StudentService();

const Student = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);
  const actions = useActions(studentActions);
  const { list } = useSelector(({ students }) => {
    return { list: students.list };
  });
  console.log("the student list is", list);
  const permission = usePermission();

  const { createStudent, updateStudent, viewStudent, deleteStudent } =
    permission;

  const hasActions = useMemo(() => {
    return updateStudent || viewStudent || deleteStudent;
  }, [permission]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    actions.getStudents();
  };

  const onEditStudent = async ({ _id }) => {
    const { data } = await studentService.getStudentById(_id);
    console.log("The student is", data);
    setCurrentStudent(data.data);
    setIsOpen(true);
  };
  const onDeleteStudent = async (data) => {
    await studentService.deleteStudent(data._id);
    fetchStudents();
  };
  const onExpandStudent = (data) => {
    navigate("/students/details", { state: data });
  };
  const onSubmitStudent = async (formData) => {
    if (currentStudent) {
      await studentService.updateStudent(currentStudent._id, formData);
      setIsOpen(false);
      setCurrentStudent(null);
      fetchStudents();
    } else {
      studentService.createStudent(formData).then(() => {
        setIsOpen(false);
        fetchStudents();
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
      Welcome To Students Page
      {createStudent && <Button onClick={onAdd} text={"ADD"} />}
      <Form
        open={isOpen}
        onOk={onSubmitStudent}
        onCancel={onCancel}
        student={currentStudent || {}}
      />
      <Table
        headerColumns={COLUMNS}
        data={list}
        hasActions={hasActions}
        hasViewAccess={viewStudent}
        hasEditAccess={updateStudent}
        onClickEdit={onEditStudent}
        hasDeleteAccess={deleteStudent}
        onClickDelete={onDeleteStudent}
        onClickView={onExpandStudent}
      />
    </div>
  );
};
export default Student;
