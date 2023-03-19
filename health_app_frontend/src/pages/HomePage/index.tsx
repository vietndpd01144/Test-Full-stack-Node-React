import FatPercentageChart from '@components/FatPercentageChart';
import AchievementRate from './components/AchievementRate';
import FoodFilterButtons from './components/FoodFilterButtons';
import ListFood from './components/ListFoood';
import GoToTopButton from '@components/button/GoToTopButton';

const HomePage: React.FC = () => {
    return (
        <>
            <div className="mb-12">
                <div className=" flex lg:flex-wrap h-[19.75rem] lg:h-auto ">
                    <AchievementRate />
                    <div className="w-3/5 lg:w-full bg-dark/600 px-[56px] py-3">
                        <FatPercentageChart />
                    </div>
                </div>
                <div className="max-w-[60rem] lg:max-w-[40rem] m-auto">
                    <FoodFilterButtons />
                    <div className="flex">
                        <ListFood />
                    </div>
                </div>
            </div>
            <GoToTopButton />
        </>
    );
};

export default HomePage;
