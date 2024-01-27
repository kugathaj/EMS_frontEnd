import { combineReducers } from '@reduxjs/toolkit';
import project from './projectSlice';
import projects from './projectsSlice';


const reducer = combineReducers({
    project,
    projects,
});

export default reducer;
