import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function HeaderColumnsGrid(props) {
  const {
    rows = [],
    columns = [],
    editMode = "cell",
    isCellEditable,
    onCellEditStop,
  } = props;

  return (
    <div style={{ height: 250, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        //editMode={editMode}
        isCellEditable={isCellEditable}
        onCellEditStop={onCellEditStop}
      />
    </div>
  );
}
