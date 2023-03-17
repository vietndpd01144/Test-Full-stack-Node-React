import FatPercentageChart from '@components/FatPercentageChart';
import AchievementRate from './components/AchievementRate';
import FoodFilterButtons from './components/FoodFilterButtons';
import ListFood from './components/ListFoood';
import GoToTopButton from '@components/button/GoToTopButton';

const HomePage: React.FC = () => {
    return (
        <>
            <div className="mb-12">
                <div className=" flex h-[19.75rem] ">
                    <AchievementRate />
                    <div className="w-3/5 bg-dark/600 px-[56px] py-3">
                        <FatPercentageChart />
                    </div>
                </div>
                <FoodFilterButtons />
                <div className="flex max-w-[60rem]  m-auto">
                    <ListFood />
                </div>
            </div>
            <GoToTopButton />
        </>
    );
};

export default HomePage;
