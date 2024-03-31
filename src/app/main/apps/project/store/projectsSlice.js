import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseAPIUrl } from 'src/baseAPIUrl';

export const getProjects = createAsyncThunk('eCommerceApp/projects/getProjects', async () => {
    const response = await axios.get(`http://ems-backend.test/api/projects`);
    const data = await response.data.projects;
    return data;

});

export const removeProjects = createAsyncThunk(
  'eCommerceApp/projects',
  async (projectIds, { dispatch, getState }) => {

    console.log('projectIds',projectIds);
    await axios.delete(`http://ems-backend.test/api/projects/${projectIds}`);
    return projectIds
    ;
  }
);

const projectsAdapter = createEntityAdapter({});

export const { selectAll: selectProjects, selectById: selectProjectById } =
  projectsAdapter.getSelectors((state) => state.eCommerceApp.projects);

const projectsSlice = createSlice({
    name: 'eCommerceApp/projects',
    initialState: projectsAdapter.getInitialState({
      searchText: '',
    }),
    reducers: {
      setProjectsSearchText: {
        reducer: (state, action) => {
          state.searchText = action.payload;
        },
        prepare: (event) => ({ payload: event.target.value || '' }),
      },
    },
    extraReducers: {
      [getProjects.fulfilled]: projectsAdapter.setAll,
      [removeProjects.fulfilled]: (state, action) => projectsAdapter.removeMany(state, action.payload),
    },
  });

  export const { setProjectsSearchText } = projectsSlice.actions;

  export const selectProjectsSearchText = ({ eCommerceApp }) => eCommerceApp.projects.searchText;

  export default projectsSlice.reducer;
