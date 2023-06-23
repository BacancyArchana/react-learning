import PropTypes from "prop-types";
import MUIButton from "@mui/material/Button";

const Button = (props) => {
  const { type, label, handleClick, disabled, className, ...extraProps } =
    props;

  const defaultButtonProps = {
    type: "button",
    variant: "contained",
    color: "primary",
    title: "",
    ...extraProps,
  };

  return (
    <MUIButton
      className={`form-control ${className}`}
      disabled={disabled}
      type={type}
      onClick={handleClick}
      {...defaultButtonProps}
    >
      {label}
    </MUIButton>
  );
};

Button.defaultProp = {
  disabled: false,
  className: "",
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ]),
};

export default Button;
