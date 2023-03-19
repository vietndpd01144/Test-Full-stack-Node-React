import FatPercentageChart from '@components/FatPercentageChart';
import { BoyRecordStatisticalType, statisticalBodyRecordAction } from '@redux/slices';
import { useAppDispatch, useAppSelector } from '@redux/store';
import classNames from 'classnames';

const data: Array<{ label: string; data: BoyRecordStatisticalType }> = [
    {
        label: '日',
        data: 'DAY'
    },
    {
        label: '月',
        data: 'MONTH'
    },
    {
        label: '年',
        data: 'YEAR'
    }
];

const BodyRecordChart: React.FC = () => {
    const { type } = useAppSelector((state) => state.bodyRecord);
    const dispatch = useAppDispatch();
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
                {data.map((item) => {
                    return (
                        <button
                            onClick={() => dispatch(statisticalBodyRecordAction(item.data))}
                            key={item.data}
                            className={classNames('w-14 h-6 rounded-xl', {
                                'bg-primary/300 text-light': type === item.data,
                                'bg-light text-primary/300': type !== item.data
                            })}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default BodyRecordChart;
