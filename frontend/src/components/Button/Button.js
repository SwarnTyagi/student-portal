import MuiButton from "@mui/material/Button";
const Button = (props) => {
  const { onClick, text, variant = "contained", children } = props;
  return (
    <MuiButton onClick={onClick} variant={variant}>
      {text || children}
    </MuiButton>
  );
};

export default Button;
