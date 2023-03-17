import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const MainLayout: React.FC = () => {
    return (
        <>
            <Header />
            <div className="mt-16">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};
export default MainLayout;
