import { useAppSelector } from '@redux/store';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const NoAuthRoute: React.FC = () => {
    const { user } = useAppSelector((state) => state.user);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (location.state?.from) {
                navigate(location.state.from);
            } else {
                navigate('/');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    return (
        <>
            <Outlet />
        </>
    );
};

export default NoAuthRoute;
