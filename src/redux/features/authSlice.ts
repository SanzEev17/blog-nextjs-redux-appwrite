import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type UserData = {
    email:string,
    name: string
}
type AuthState = {
    isAuthenticated:boolean
    userData: UserData | null
}

const initialState = {
    auth: {
        isAuthenticated: false,
        userData: null
    } as AuthState
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action:PayloadAction<UserData>) => {
            state.auth.isAuthenticated = true;
            state.auth.userData = action.payload;
        },
        logout: (state) => {
            state.auth.isAuthenticated = false;
            state.auth.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer