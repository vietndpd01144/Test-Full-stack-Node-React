import { Status } from '@config/enum/status';
import { fetchExerciseAction } from '@redux/slices';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { useEffect } from 'react';

const ListExercise: React.FC = () => {
    const { exercises, loadExercisesStatus } = useAppSelector((state) => state.exercise);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchExerciseAction());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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

                <div className="h-[12rem] overflow-y-scroll">
                    {loadExercisesStatus === Status.LOADING ? (
                        <div className="flex mt-10 justify-center text-light">Loading...</div>
                    ) : (
                        <div className="flex justify-between flex-wrap">
                            {exercises.map((exercises) => {
                                return (
                                    <div
                                        key={exercises._id}
                                        className="w-[45%] sm:w-full inline-flex justify-between items-start  border-b-2 border-[#777777] h-fit mb-4 py-1"
                                    >
                                        <div className="flex ">
                                            <div className="w-1.5 h-1.5 rounded-full bg-light mt-1.5"></div>
                                            <div className="ml-3">
                                                <p className="font-Noto_Sans_JP text-[15px] leading-[22px] text-light">
                                                    {exercises.name}
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListExercise;
