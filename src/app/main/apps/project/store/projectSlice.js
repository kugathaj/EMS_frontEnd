import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';
import { baseAPIUrl } from 'src/baseAPIUrl';

export const getProject = createAsyncThunk('eCommerceApp/project/getProject', async (productId) => {
  // const response = await axios.get(`/api/ecommerce/products/${productId}`);
  const response = await axios.get(`http://ems-backend.test/api/projects/${productId}`);
  const data = await response.data.project;
  return data === undefined ? null : data;
});


export const updateProject = createAsyncThunk(
  'eCommerceApp/product/updateProject',
  async (projectData, { dispatch, getState }) => {
    const { id } = getState().eCommerceApp.project;
    const response = await axios.put('http://ems-backend.test/api/projects/'+id, projectData);

    const data = await response.data.project;

    return data;
  }
);

export const saveProject = createAsyncThunk(
  'eCommerceApp/product/updateProject',
  async (projectData, { dispatch, getState }) => {

    const response = await axios.post('http://ems-backend.test/api/projects', projectData);

    const data = await response.data.project;

    return data;
  }
);



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
          project_manager_id: '',
          status: '',
          priority: ''
        },
      }),
    },
  },
  extraReducers: {
    [getProject.fulfilled]: (state, action) => action.payload,
  },
});

export const { newProduct, resetProduct } = projectSlice.actions;
export const selectProject = ({ eCommerceApp }) => eCommerceApp.project;


export default projectSlice.reducer;
