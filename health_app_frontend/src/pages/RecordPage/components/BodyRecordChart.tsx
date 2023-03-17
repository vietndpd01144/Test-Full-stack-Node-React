import FatPercentageChart from '@components/FatPercentageChart';
import classNames from 'classnames';

const BodyRecordChart: React.FC = () => {
    return (
        <div className="w-full  bg-dark/500 flex flex-col px-6 py-4 mt-[56px]">
            <div className="flex mb-2">
                <p className="text-[15px] leading-[18px] uppercase text-light">
                    Body
                    <br /> Record
                </p>
                <p className="ml-3 text-[22px] text-light">2021.05.21</p>
            </div>
            <div className="relative h-[215px] w-full ">
                <FatPercentageChart />
            </div>
            <div className="flex mt-2 gap-3">
                <button
                    className={classNames('w-14 h-6 bg-light text-primary/300 rounded-xl', {
                        'bg-primary/300 text-light': true
                    })}
                >
                    日
                </button>
                <button
                    className={classNames('w-14 h-6 bg-light text-primary/300 rounded-xl', {
                        'bg-primary/300 text-light': true
                    })}
                >
                    週
                </button>
                <button
                    className={classNames('w-14 h-6 rounded-xl', {
                        'bg-primary/300 text-light': true,
                        'bg-light text-primary/300': false
                    })}
                >
                    月
                </button>
                <button
                    className={classNames('w-14 h-6 bg-light text-primary/300 rounded-xl', {
                        'bg-primary/300 text-light': true
                    })}
                >
                    年
                </button>
            </div>
        </div>
    );
};

export default BodyRecordChart;
