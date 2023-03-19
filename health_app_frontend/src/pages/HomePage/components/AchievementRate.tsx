import banner from '@assets/images/banner.png';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AchievementRate: React.FC = () => {
    return (
        <div
            className="w-2/5 lg:w-full lg:py-10 bg-no-repeat bg-center bg-cover relative "
            style={{ backgroundImage: `url('${banner}')` }}
        >
            <div className="flex justify-center items-center h-full">
                <div className="w-[11.25rem] h-[11.25rem] ">
                    <CircularProgressbarWithChildren
                        strokeWidth={2}
                        value={75}
                        styles={buildStyles({
                            trailColor: 'transparent',
                            pathColor: '#ffffff'
                        })}
                    >
                        <div className="flex items-baseline">
                            <p className="text-[18px] leading-[22px] text-light">05/21</p>
                            <p className="text-[25px] leading-[30px] text-light">75%</p>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            <div
                className="absolute top-0 left-0 right-0 bottom-0 opacity-20"
                style={{ background: 'linear-gradient(225deg, #FFCC21 0%, #FF963C 100%)' }}
            ></div>
        </div>
    );
};
export default AchievementRate;
