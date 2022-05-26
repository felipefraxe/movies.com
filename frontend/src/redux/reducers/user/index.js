import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'Guest',
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      const { name } = action.payload;
      state.username = name;
    }
  }
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;