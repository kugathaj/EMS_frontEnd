import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';
import { baseAPIUrl } from 'src/baseAPIUrl';

export const getProject = createAsyncThunk('eCommerceApp/project/getProject', async (productId) => {
  // const response = await axios.get(`/api/ecommerce/products/${productId}`);
  const response = await axios.get(`http://ems-backend.test/api/projects/${productId}`);
  const data = await response.data;

  return data === undefined ? null : data;
});


const projectSlice = createSlice({
  name: 'eCommerceApp/product',
  initialState: null,
  reducers: {
    resetProduct: () => null,
    newProduct: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: FuseUtils.generateGUID(),
          name: '',
          description: '',
        },
      }),
    },
  },
  extraReducers: {
    [getProject.fulfilled]: (state, action) => action.payload,
  },
});

export const { newProduct, resetProduct } = projectSlice.actions;


export default projectSlice.reducer;
