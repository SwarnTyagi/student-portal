import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataGrid from "../../components/DataGrid/DataGrid";
import AcademicService from "../../services/AcademicService";

const COLUMNS = [
  {
    editable: true,
    field: "monday",
    headerName: "Mon",
    description: "The day of the week.",
  },
  {
    editable: true,
    field: "tuesday",
    headerName: "Tue",
    description: "The day of the week.",
  },
  {
    editable: true,
    field: "wednesday",
    headerName: "Wed",
    description: "The day of the week.",
  },
  {
    editable: true,
    field: "thursday",
    headerName: "Thurs",
    description: "The day of the week.",
  },
  {
    editable: true,
    field: "friday",
    headerName: "Fri",
    description: "The day of the week.",
  },
  {
    editable: true,
    field: "saturday",
    headerName: "Sat",
    description: "The day of the week.",
  },
  {
    editable: true,
    field: "sunday",
    headerName: "Sun",
    description: "The day of the week.",
  },
];
const academicService = new AcademicService();

export default function AcademicPlan() {
  const [academicData, setAcademicData] = useState([]);
  useEffect(() => {
    fetchAcademicPlan();
  }, []);
  const fetchAcademicPlan = async () => {
    const { data } = await academicService.getAcademicPlan();
    setAcademicData(data);
  };
  const isCellEditable = (params) => {
    return params.field != "sunday";
  };

  const onCellEditStop = (params, ev) => {
    const { row, rowNode, field, getValue } = params;
    const id = row.id;
    const value = getValue(rowNode.id, field);
    const body = { [field]: value };
    academicService.updateAcademicPlan(body, id);
  };
  return (
    <div>
      <DataGrid
        columns={COLUMNS}
        rows={academicData}
        isCellEditable={isCellEditable}
        onCellEditStop={onCellEditStop}
      />
    </div>
  );
}
