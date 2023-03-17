import { useAppSelector } from '@redux/store';
import { numberToDateTime } from 'src/util/convertTime';

const ListDiary: React.FC = () => {
    const { diaries } = useAppSelector((state) => state.diary);
    return (
        <div className="mt-[56px]">
            <h4 className="text-[22px] leading-[27px] mb-2">MY DIARY</h4>
            <div className="flex flex-wrap justify-between gap-y-3">
                {diaries.map((diary) => {
                    return (
                        <div key={diary.id} className="w-[24%] p-4 pb-7 border-[1.5px] border-dark/400">
                            <p className="text-[18px] leading-[22px] ">
                                {numberToDateTime(diary.createAt).date}
                                <br />
                                {numberToDateTime(diary.createAt).time}
                            </p>
                            <h5 className="font-medium font-Noto_Sans_JP text-xs h-8 text-ellipsis mt-2">
                                {diary.title}
                            </h5>
                            <p className=" font-Noto_Sans_JP text-xs max-h-24 text-ellipsis">{diary.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ListDiary;
