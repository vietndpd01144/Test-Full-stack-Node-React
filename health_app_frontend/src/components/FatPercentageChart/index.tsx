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
                drawBorder: false //<- set this
            }
        },
        y: {
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

const labels = ['1月', '2月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 80, 87, 80, 60, 67, 55, 50, 43, 49, 39, 36, 20],
            borderColor: '#8FE9D0',
            backgroundColor: '#8FE9D0'
        },
        {
            label: 'Dataset 2',
            data: [100, 96, 76, 74, 65, 69, 60, 53, 46, 45, 32, 40, 27],
            borderColor: '#FFCC21',
            backgroundColor: '#FFCC21'
        }
    ]
};

const FatPercentageChart: React.FC = () => {
    return (
        <Line
            options={options}
            data={data}
            style={{
                width: '100%',
                // height: '100%',
                margin: '0 auto'
                // padding: '12px 0'
            }}
        />
    );
};

export default FatPercentageChart;
