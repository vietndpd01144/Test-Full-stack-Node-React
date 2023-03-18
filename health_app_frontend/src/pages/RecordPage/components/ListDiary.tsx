import LoadMoreButton from '@components/button/LoadmoreButton';
import { Status } from '@config/enum/status';
import { fetchDiariesAction, loadMoreDiariesAction } from '@redux/slices';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { useEffect } from 'react';
import { dateConvert } from 'src/util/convertTime';

const ListDiary: React.FC = () => {
    const { diaries, fetchDiaryStatus, totalCount } = useAppSelector((state) => state.diary);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchDiariesAction());
    }, []);

    return fetchDiaryStatus === Status.LOADING ? (
        <>Loading</>
    ) : (
        <div className="mt-[56px] mx-[-0.5rem]">
            <h4 className="text-[22px] leading-[27px] mx-2 mb-2">MY DIARY</h4>
            <div className="flex flex-wrap justify-start">
                {diaries.map((diary) => {
                    return (
                        <div key={diary._id} className="w-1/4 ">
                            <div className="m-2 p-4 pb-7 border-[1.5px] border-dark/400">
                                <p className="text-[18px] leading-[22px] ">
                                    {dateConvert(diary.createdAt).date}
                                    <br />
                                    {dateConvert(diary.createdAt).time}
                                </p>
                                <h5 className="font-medium font-Noto_Sans_JP text-xs h-8 text-ellipsis mt-2">
                                    {diary.title}
                                </h5>
                                <p className=" font-Noto_Sans_JP text-xs max-h-24 text-ellipsis">{diary.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center pt-10">
                {totalCount > diaries.length && (
                    <LoadMoreButton
                        label="自分の日記をもっと見る"
                        onClick={() => {
                            dispatch(loadMoreDiariesAction());
                        }}
                    />
                )}
            </div>
        </div>
    );
};
export default ListDiary;
