import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../../services/StudentService";
import Table from "../../components/Table/Table";
import Form from "./StudentForm";
import Button from "./../../components/Button/Button";

const COLUMNS = [
  { name: "name", title: "Name" },
  { name: "age", title: "Age" },
  { name: "course", title: "Course" },
];

// const DATA = [
//   { name: "Shrashi", age: 27, course: "Ph.D" },
//   { name: "Swaranya", age: 3.6, course: "KG" },
//   { name: "Swarn", age: 25, course: "MBA" },
// ];

const studentService = new StudentService();

const Student = () => {
  const [studentData, setStudentData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    fetchStudents();
  }, []);
  // const onClickStudent = (data) => {
  //   navigate("/students/details", { state: data });
  // };
  const fetchStudents = async () => {
    const { data } = await studentService.getStudents();
    console.log("The students data is", data);
    setStudentData(data.data);
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
      <Button onClick={onAdd} text={"ADD"} />
      <Form
        open={isOpen}
        onOk={onSubmitStudent}
        onCancel={onCancel}
        student={currentStudent || {}}
      />
      <Table
        headerColumns={COLUMNS}
        data={studentData}
        // onRowClick={onClickStudent}
        hasActions
        hasEditAccess
        onClickEdit={onEditStudent}
        hasDeleteAccess
        onClickDelete={onDeleteStudent}
        onClickExpand={onExpandStudent}
        //onColumnClick={onColumnClick}
      />
    </div>
  );
};
export default Student;
