import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Projects = lazy(() => import('./projects/Projects'));


const ProjectAppConfig = {
    settings: {
        layout: {},
    },

    routes: [
    {
        path: 'apps/project/projects',
        element: <Projects />,
    },
    // {
    //     path: 'apps/project/projects/:projectId/*',
    //     element: <Product />,
    // },
    // {
    //     path: 'apps/project',
    //     element: <Navigate to="projects" />,
    // },
    ],
};

export default ProjectAppConfig;
