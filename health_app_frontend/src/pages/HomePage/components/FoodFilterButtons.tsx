import knife from '@assets/icons/icon_knife.svg';
import { useState } from 'react';
import { useAppDispatch } from '@redux/store';
import { filterFoodAction } from '@redux/slices/foodSlice/food.slice';
interface Button {
    data: 'MORNING' | 'LUNCH' | 'DINNER' | 'SNACK';
    name: string;
    iconPath: string;
}

const FoodFilterButtons: React.FC = () => {
    const dispatch = useAppDispatch();
    const [buttonsObj] = useState<Button[]>([
        {
            data: 'MORNING',
            name: 'Morning',
            iconPath: knife
        },
        {
            data: 'LUNCH',
            name: 'Lunch',
            iconPath: knife
        },
        {
            data: 'DINNER',
            name: 'Dinner',
            iconPath: knife
        },
        {
            data: 'SNACK',
            name: 'Snack',
            iconPath: knife
        }
    ]);
    const handleClick = (data: 'MORNING' | 'LUNCH' | 'DINNER' | 'SNACK') => {
        dispatch(filterFoodAction(data));
    };
    return (
        <div className="flex flex-wrap justify-center items-center">
            {buttonsObj.map((button: Button, index) => (
                <div key={index} className="mx-[2.625rem] mt-[1.735rem] mb-[1.5625rem] max-w-[25%] lg:w-[50%]">
                    <button key={index} onClick={() => handleClick(button.data)}>
                        <div
                            className="h-[8.735rem] w-[7.25rem]  flex justify-center items-center"
                            style={{
                                clipPath: 'polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)',
                                background: 'linear-gradient(65.89deg, #FFCC21 8.26%, #FF963C 91.18%)'
                            }}
                        >
                            <div className="flex justify-center items-center flex-col">
                                <img src={button.iconPath} alt="icon" />
                                <p className="text-[20px] text-light">{button.name}</p>
                            </div>
                        </div>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FoodFilterButtons;
