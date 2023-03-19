import { AuthLayout } from '@layouts/AuthLayout';
import MainLayout from '@layouts/MainLayout';
import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NoAuthRoute from './NotAuthRoute';
const AddDiaryPage = lazy(() => import('@pages/AddDiaryPage'));
const RecordPage = lazy(() => import('@pages/RecordPage'));
const BlogPage = lazy(() => import('@pages/BlogPage'));
const AddBodyRecordPage = lazy(() => import('@pages/AddBodyRecordPage'));
const AddExercisePage = lazy(() => import('@pages/AddExrcisePage'));
const HomePage = lazy(() => import('@pages/HomePage'));
const SignInPage = lazy(() => import('@pages/SignIn'));
const SignUpPage = lazy(() => import('@pages/SignUp'));

const routesConfig: RouteObject[] = [
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                element: <PrivateRoute />,
                children: [
                    { index: true, element: <HomePage /> },
                    { path: '/my-record', element: <RecordPage /> },
                    { path: '/add-body-record', element: <AddBodyRecordPage /> },
                    { path: '/add-exercise', element: <AddExercisePage /> },
                    { path: '/add-diary', element: <AddDiaryPage /> }
                ]
            },
            {
                path: 'blog',
                element: <BlogPage />
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                element: <NoAuthRoute />,
                children: [
                    {
                        path: 'sign-in',
                        element: <SignInPage />
                    },
                    {
                        path: 'sign-up',
                        element: <SignUpPage />
                    }
                ]
            }
        ]
    }
];

export const routes = createBrowserRouter(routesConfig);
