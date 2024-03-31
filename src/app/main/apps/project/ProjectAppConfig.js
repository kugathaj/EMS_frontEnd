import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Projects = lazy(() => import('./projects/Projects'));
const Project = lazy(() => import('./project/Project'));


const ProjectAppConfig = {
    settings: {
        layout: {},
    },

    routes: [
    {
        path: 'apps/projects',
        element: <Projects />,
    },
    {
        path: 'apps/projects/:projectId/*',
        element: <Project />,
    },
    {
        path: 'apps/projects',
        element: <Navigate to="projects" />,
    },
    ],
};

export default ProjectAppConfig;
