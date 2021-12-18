import MuiButton from "@mui/material/Button";
const Button = (props) => {
  const { onClick, text, variant = "contained" } = props;
  return (
    <MuiButton onClick={onClick} variant={variant}>
      {text}
    </MuiButton>
  );
};

export default Button;
