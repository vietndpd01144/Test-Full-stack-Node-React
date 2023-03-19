import { useAppSelector } from '@redux/store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
    const { user } = useAppSelector((state) => state.user);
    const location = useLocation();
    if (user) {
        return (
            <>
                <Outlet />
            </>
        );
    }
    return <Navigate to={'/auth/sign-in'} replace state={{ from: location }} />;
};

export default PrivateRoute;
