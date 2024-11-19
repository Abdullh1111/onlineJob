import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
  export type TUser = {
    user:{
      id?: string
      name?: string;
      email?: string;
      password?: string;
      role?: string;
      balance?: number;
    }
  };


// Define the initial state using that type
const initialState: Partial<TUser> ={
  user: {
    id:"",
    name: "",
    email: "",
    password: "",
    role: "",
    balance: 0,
  }
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<Partial<TUser>>) => {
      state.user = { ...state.user, ...payload };
    },
  }
})

export const { setUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default userSlice.reducer