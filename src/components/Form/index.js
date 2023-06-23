import { useState } from "react";
import Button from "../common/button";
import Input from "../common/input";

const defaultForm = {
  firstName: "",
  lastName: "",
  address: "",
  age: "",
  gender: "",
  isEmployeed: false,
  errors: {},
};

function Form() {
  const [form, setForm] = useState(defaultForm);

  const handleChange = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div>
      <Input
        label="First Name"
        name="firstName"
        value={form.firstName}
        handleChange={handleChange}
        required
        error={form.errors.firstName}
      />
      <Input
        label="First Name"
        name="lastName"
        value={form.lastName}
        handleChange={handleChange}
        required
        error={form.errors.lastName}
      />
      <Button label="Submit" />
    </div>
  );
}

export default Form;
