import { useAppSelector } from '@redux/store';

const ListExercise: React.FC = () => {
    const { exercises } = useAppSelector((state) => state.exercise);
    return (
        <div className="w-full  bg-dark/500 flex flex-col px-6 py-4 mt-[56px]">
            <div className="">
                <div className="flex mb-2">
                    <p className="text-[15px] leading-[18px] uppercase text-light">
                        my
                        <br /> Exercises
                    </p>
                    <p className="ml-3 text-[22px] text-light">2021.05.21</p>
                </div>

                <div className="h-[12rem] overflow-scroll">
                    <div className="flex justify-between flex-wrap">
                        {exercises.map((exercises) => {
                            return (
                                <div
                                    key={exercises.id}
                                    className="w-[45%] inline-flex justify-between items-start  border-b-2 border-[#777777] h-fit mb-4 py-1"
                                >
                                    <div className="flex ">
                                        <div className="w-1.5 h-1.5 rounded-full bg-light mt-1.5"></div>
                                        <div className="ml-3">
                                            <p className="font-Noto_Sans_JP text-[15px] leading-[22px] text-light">
                                                {exercises.title}
                                            </p>
                                            <p className="text-primary/300 text-[15px] leading-[18px]">
                                                {exercises.calories}Kcal
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-[18px] leading-[22px] text-primary/300">
                                        {exercises.time / 60} min
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListExercise;
