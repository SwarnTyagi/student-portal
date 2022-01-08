import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { makeStyles } from "@mui/styles";
import ExpandIcon from "@mui/icons-material/AssignmentReturned";

const StyledTableCell = styled(TableCell)(({ theme }) => {
  return {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  };
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const useStyles = makeStyles({
  actionColumn: {
    width: 150,
    textAlign: "center",
  },
  actionWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
});
export default function CustomTable({
  headerColumns,
  data,
  onRowClick,
  onColumnClick,
  hasEditAccess = false,
  onClickEdit,
  hasActions = false,
  hasDeleteAccess = false,
  onClickDelete,
  onClickExpand,
}) {
  const styles = useStyles();
  const onTableRowClick = (row) => () => {
    onRowClick && onRowClick(row);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headerColumns.map((headerColumn) => {
              return (
                <StyledTableCell style={headerColumn.style || {}}>
                  {headerColumn.title}
                </StyledTableCell>
              );
            })}
            {hasActions && (
              <StyledTableCell className={styles.actionColumn}>
                Actions
              </StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name} onClick={onTableRowClick(row)}>
              {headerColumns.map((headerColumn) => {
                return (
                  <StyledTableCell>{row[headerColumn.name]}</StyledTableCell>
                );
              })}
              {hasActions && (
                <StyledTableCell>
                  <Actions
                    row={row}
                    hasEditAccess={hasEditAccess}
                    onClickEdit={onClickEdit}
                    hasDeleteAccess={hasDeleteAccess}
                    onClickDelete={onClickDelete}
                    onClickExpand={onClickExpand}
                    actionWrapperClass={styles.actionWrapper}
                  />
                </StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function Actions(props) {
  const {
    hasEditAccess,
    onClickEdit,
    hasDeleteAccess,
    onClickDelete,
    onClickExpand,
    actionWrapperClass,
    hasExpandAccess = true,
    row,
  } = props;
  const _onClickEdit = () => {
    onClickEdit && onClickEdit(row);
  };
  const _onClickDelete = () => {
    onClickDelete && onClickDelete(row);
  };
  const _onClickExpand = () => {
    onClickExpand && onClickExpand(row);
  };
  return (
    <div className={actionWrapperClass}>
      {hasEditAccess ? <EditIcon onClick={_onClickEdit} /> : null}
      {hasDeleteAccess ? <DeleteIcon onClick={_onClickDelete} /> : null}
      {hasExpandAccess ? <ExpandIcon onClick={_onClickExpand} /> : null}
    </div>
  );
}
