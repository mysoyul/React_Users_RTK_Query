import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "types/User";

export type UsersState ={
    userList: User[]
}

const initialState: UsersState  = {
    userList: [
        { id: "1", name: "Jane", email: "jane@email.com" },
        { id: "2", name: "John", email: "john@email.com" },
        { id: "3", name: "Jasmin", email: "jasmin@email.com" },
    ]
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.userList.push(action.payload);
        },
        editUser: (state, action: PayloadAction<User>) => {
            const { id, name, email } = action.payload;
            const existingUser = state.userList.find(user => user.id === id);
            if (existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteUser: (state, action: PayloadAction<User>)  => {
            const { id } = action.payload;
            const remainedUser = state.userList.filter(user => user.id !== id);
            state.userList = remainedUser;
        }
    }
});

export const { addUser, editUser, deleteUser } = usersSlice.actions; //CaseReducerActions
export default usersSlice.reducer;  //Reducer