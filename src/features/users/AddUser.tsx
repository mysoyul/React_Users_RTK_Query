import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import { useDispatch } from "react-redux";

import Button from "components/Button";
import TextField from "components/TextField";
import User from "types/User";
// import { addUser } from "store/slice/usersSlice"
// import { AppDispatch } from "store";
import { useAddUserMutation } from "store/service/usersApi"

const AddUser = () => {
  const [values, setValues] = useState<User>({
    name: "",
    email: "",
  });

  const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();
  const [addUser] = useAddUserMutation();

  const handleAddUser = () => {
    // dispatch(addUser({
    //   id: uuidv4(),
    //   name: values.name,
    //   email: values.email
    // }));
    addUser({
      name: values.name,
      email: values.email
    });	
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <h3 className="text-center text-2xl text-indigo-700">Add User</h3>
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "John Doe" }}
        value={values.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, name: e.target.value })}  
      />
      <br />
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: "johndoe@mail.com" }}
        value={values.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, email: e.target.value })}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
