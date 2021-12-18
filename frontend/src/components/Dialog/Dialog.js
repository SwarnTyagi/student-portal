import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog(props) {
  const { open, content, okText, cancelText, onOk, onCancel, children, title } =
    props;
  const handleOnOk = () => {
    onOk && onOk();
  };
  const handleOnCancel = () => {
    onCancel && onCancel();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleOnCancel}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel}>{cancelText}</Button>
          <Button onClick={handleOnOk}>{okText}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
