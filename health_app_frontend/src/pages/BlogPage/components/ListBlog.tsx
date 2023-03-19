import ImageItem from '@components/Image/ImageItem';
import LoadMoreButton from '@components/button/LoadmoreButton';
import { fetchBlogAction, loadMoreBlogAction } from '@redux/slices';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { useEffect } from 'react';
import { dateConvert } from 'src/util/convertTime';

const ListBog: React.FC = () => {
    const { blogs, totalCount } = useAppSelector((state) => state.blog);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchBlogAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="w-[60rem] lg:max-w-[40rem] sm:max-w-[18rem] m-auto mt-14">
            <div className="flex justify-start flex-wrap mb-6 mx-[-0.5rem]">
                {blogs.map((item, index) => (
                    <div key={item._id} className="w-1/4 lg:w-1/2 sm:w-full">
                        <div className="m-2">
                            <div className="">
                                <ImageItem
                                    imagePath={process.env.REACT_APP_MEDIA_URL + item.image}
                                    text={`${dateConvert(item.createdAt).date}  ${dateConvert(item.createdAt).time}`}
                                />
                            </div>
                            <p className="text-[15px] pt-2 leading-[22px] max-h-11 text-ellipsis font-Noto_Sans_JP">
                                {item.title}
                            </p>
                            <div className="mt-1">
                                {item.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-primary/300 mr-2 font-Noto_Sans_JP text-[15px] leading-[22px] hover:underline h-[22px] text-ellipsis"
                                    >{`#${tag}`}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                {totalCount > blogs.length && (
                    <LoadMoreButton
                        onClick={() => {
                            dispatch(loadMoreBlogAction());
                        }}
                        label="コラムをもっと見る"
                    />
                )}
            </div>
        </div>
    );
};

export default ListBog;
