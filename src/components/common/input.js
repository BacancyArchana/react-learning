import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const Input = (props) => {
  const {
    type,
    name,
    label,
    handleChange,
    error,
    defaultValue,
    value,
    required,
    className,
  } = props;

  const defaultInputProps = {
    focused: true,
    variant: "standard",
    placeholder: `Enter ${name}`,
  };

  const onChange = (evt) => {
    handleChange(evt.target.name, evt.target.value);
  };

  const getHelperText = () => {
    if (!error) return "";
    if (required && !value) return `${label} is required.`;
  };

  const helperText = getHelperText();

  return (
    <TextField
      className={`form-control ${className}`}
      required={required}
      label={label}
      defaultValue={defaultValue}
      value={value}
      type={type}
      name={name}
      error={error}
      helperText={helperText}
      onChange={onChange}
      {...defaultInputProps}
    />
  );
};

Input.defaultProp = {
  className: "",
  type: "text",
  label: "",
  value: undefined,
  defaultValue: undefined,
  error: false,
  required: false,
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  required: PropTypes.bool,
};

export default Input;
