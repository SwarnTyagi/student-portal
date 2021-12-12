import React from "react";
import Table from "../../components/Table/Table";

const Column=[{name:"FacultyID",title:"ID"},
{name:"Name",title:"Name"},
{name:"Course",title:"Course"},
{name:"Rating",title:"Faculty Rating"}]
const Data1 = [{FacultyID:"ECE-141",Name:"Dr Shraddha Kapoor",Course:"Digital Electronics",Rating:"5"}]
const Teachers = () => {
  return <div>Welcome to Teachers Page
  <Table headerColumns={Column} data={Data1}></Table>
  </div>;
};
export default Teachers;
