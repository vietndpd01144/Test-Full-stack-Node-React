import { statisticalBodyRecordAction } from '@redux/slices/bodyRecordSlice/bodyRecord.slice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        x: {
            grid: {
                drawBorder: false,
                display: true,
                lineWidth: 1,
                color: '#777777'
            },
            gridLines: {
                display: false,
                drawBorder: false
            }
        },
        y1: {
            ticks: {
                display: false,
                beginAtZero: false
            },
            grid: {
                drawBorder: false,
                display: false,
                color: 'transparent'
            }
            // axis: {}
        },
        y2: {
            ticks: {
                display: false,
                beginAtZero: false
            },
            grid: {
                drawBorder: false,
                display: false,
                color: 'transparent'
            }
        }
    }
};

const FatPercentageChart: React.FC = () => {
    const dispatch = useAppDispatch();
    const { dataForChart } = useAppSelector((state) => state.bodyRecord);
    useEffect(() => {
        dispatch(statisticalBodyRecordAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (dataForChart) {
        const dataset: Array<Array<any>> = [[], []];
        // eslint-disable-next-line
        Object.values(dataForChart as object).map((value) => {
            dataset[0].push(value[0]);
            dataset[1].push(value[1]);
        });
        const data = {
            labels: Object.keys(dataForChart as object),
            datasets: [
                {
                    label: 'Weight',
                    data: dataset[0],
                    borderColor: '#8FE9D0',
                    backgroundColor: '#8FE9D0',
                    yAxisID: 'y1'
                },
                {
                    label: 'Fast percentage',
                    data: dataset[1],
                    borderColor: '#FFCC21',
                    backgroundColor: '#FFCC21',
                    yAxisID: 'y2'
                }
            ]
        };
        return (
            <Line
                options={options}
                data={data}
                style={{
                    width: '100%',
                    margin: '0 auto'
                }}
            />
        );
    }
    return <></>;
};

export default FatPercentageChart;
