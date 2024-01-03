// import Taro from '@tarojs/taro'
// import storage from '@/utils/storage'
import {createSlice} from '@reduxjs/toolkit';
// import { getDetail } from '@/api/user'

const name = 'user';

const initialState = {
  token: '',
  userInfo: {
    accout: null
  },
};

// export const afterLogin = createAsyncThunk(`${name}/afterLogin`, async (data: any, thunkAPI) => {
//   const { token } = data
//   const { dispatch } = thunkAPI
//   dispatch(setToken(token))
//   storage.set('loginInfo', data)
//   storage.set('token', token)
//   return await getDetail()
// })

export const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    setToken: (state, {payload}) => {
      state.token = payload;
    },
    setUserInfo: (state, {payload}) => {
      state.userInfo = payload;
    },
  },
});

export const {setToken, setUserInfo} = userSlice.actions;

export default userSlice.reducer;
