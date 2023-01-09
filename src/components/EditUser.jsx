import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "./TextField";
import Button from "./Button";

const EditUser = () => {
    const [values, setValues] = useState({ username: '', email: '' });
    const navigate = useNavigate();
  
    const handleEditUser = () => {
      console.log(values);
      setValues({ username: "", email: "" });
      navigate("/");
    }
  
    return (
      <div className="mt-10 max-w-xl mx-auto">
        <TextField 
          label={"Username"}
          inputProps={{ type: "text", placeholder: "John Doe" }}
          value={values.username}
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <br />
        <TextField 
          label={"Email"}
          inputProps={{ type: "email", placeholder: "johndoe@gmail.com" }}
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <Button onClick={handleEditUser}>Edit</Button>
      </div>
    );
}

export default EditUser;