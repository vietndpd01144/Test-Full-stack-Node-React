import food from '@assets/images/m01.png';
import LoadMoreButton from '@components/button/LoadmoreButton';
interface FoodItem {
    type: 'MORNING' | 'LUNCH' | 'DINNER' | 'SNACK';
    date: number;
    image: string;
}

const FoodItem: React.FC<FoodItem> = ({ image }) => {
    return (
        <div className="w-1/4">
            <div className="relative m-2">
                <img className="w-full h-full" src={image} alt="" />
                <div className="absolute bottom-0 left-0 bg-primary/300 p-[7px]">
                    <p className="text-[15px] text-light">05.21.Lunch</p>
                </div>
            </div>
        </div>
    );
};

const foods: FoodItem[] = [
    {
        type: 'MORNING',
        date: Date.now(),
        image: food
    },
    {
        type: 'MORNING',
        date: Date.now(),
        image: food
    },
    {
        type: 'MORNING',
        date: Date.now(),
        image: food
    },
    {
        type: 'MORNING',
        date: Date.now(),
        image: food
    },
    {
        type: 'MORNING',
        date: Date.now(),
        image: food
    },
    {
        type: 'MORNING',
        date: Date.now(),
        image: food
    }
];
const ListFood: React.FC = () => {
    const total = 100;
    console.log(total > foods.length);

    return (
        <div>
            <div className="flex justify-start flex-wrap mb-6">
                {foods.map((item, index) => (
                    <FoodItem key={index} {...item} />
                ))}
            </div>
            <div className="flex justify-center">
                {total > foods.length && <LoadMoreButton onClick={() => {}} label="記録をもっと見る" />}
            </div>
        </div>
    );
};

export default ListFood;
