import { Food } from '@api/food/interfaces/food.interface';
import food from '@assets/images/m01.png';
import ImageItem from '@components/Image/ImageItem';
import LoadMoreButton from '@components/button/LoadmoreButton';
import { Status } from '@config/enum/status';
import { fetchHistoryFoodAction, loadMoreFoodAction } from '@redux/slices/foodSlice/food.slice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { useEffect } from 'react';
import { dateConvert } from 'src/util/convertTime';

const FoodItem: React.FC<Food> = ({ image, createdAt }) => {
    return (
        <div className="w-1/4">
            <div className="relative m-2">
                <ImageItem
                    imagePath={process.env.REACT_APP_MEDIA_URL + image}
                    text={`${dateConvert(createdAt).dateNoYear}.Lunch`}
                />
            </div>
        </div>
    );
};

const ListFood: React.FC = () => {
    const { foods, totalCount, foodFetchStatus } = useAppSelector((state) => state.food);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchHistoryFoodAction());
    }, []);

    return foodFetchStatus === Status.LOADING ? (
        <>Loading</>
    ) : (
        <div className="w-full">
            <div className="flex justify-start flex-wrap mb-6">
                {foods.map((item, index) => (
                    <FoodItem key={index} {...item} />
                ))}
            </div>
            <div className="flex justify-center">
                {totalCount > foods.length && (
                    <LoadMoreButton
                        onClick={() => {
                            dispatch(loadMoreFoodAction());
                        }}
                        label="記録をもっと見る"
                    />
                )}
            </div>
        </div>
    );
};

export default ListFood;
