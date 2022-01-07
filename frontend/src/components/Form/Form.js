import React from "react";
import Dialog from "../Dialog/Dialog";
import { makeStyles } from "@mui/styles";
import Button from "../Button/Button";

const useStyles = makeStyles({
  dialog: {
    minWidth: 400,
  },
});
export default function Form(props) {
  const {
    open,
    content,
    okText,
    cancelText,
    onOk,
    onCancel,
    children,
    title,
    withModal = true,
  } = props;
  console.log("the text is", okText);
  const classes = useStyles();
  return (
    <div>
      {withModal ? (
        <Dialog
          dialogClass={classes.dialog}
          content={content}
          title={title}
          okText={okText}
          cancelText={cancelText}
          open={open}
          onOk={onOk}
          onCancel={onCancel}
        >
          <form>{children}</form>
        </Dialog>
      ) : (
        <form>
          {children}
          <br />
          <Button onClick={onOk}>{okText}</Button>
        </form>
      )}
    </div>
  );
}
