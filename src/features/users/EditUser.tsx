import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TextField from "components/TextField";
import Button from "components/Button";
import User from "types/User";
import { editUser } from "store/slice/usersSlice"
import { RootState, AppDispatch } from "store";

const EditUser = () => {
  const navigate = useNavigate();
  const params = useParams();

  // const usersState = useSelector((state: RootState) => state.users)
  // const users = usersState.userList;
  const users: User[] = [
      { id: "1", name: "Jane", email: "jane@email.com" },
      { id: "2", name: "John", email: "john@email.com" },
    ];
  const existingUser = users.find(user => user.id === params.id);
  const { name, email } = existingUser as User;
  const [values, setValues] = useState<User>({
    // name: name,
    // email: email,
    name, email
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleEditUser = () => {
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }));
    setValues({ name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <h3 className="text-center text-2xl text-indigo-700">Edit User</h3>
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "John Doe" }}
        value={values.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValues({ ...values, name: e.target.value })
        }
      />
      <br />
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: "johndoe@mail.com" }}
        value={values.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValues({ ...values, email: e.target.value })
        }
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
