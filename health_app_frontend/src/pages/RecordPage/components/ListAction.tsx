import exercise from '@assets/images/exercise.png';
import body from '@assets/images/body_record.png';
import diary from '@assets/images/diary.png';

const ListActions: React.FC = () => {
    return (
        <div className="flex justify-between pt-[56px]">
            <div className="w-[30%] aspect-square">
                <div className="border-[24px] h-full border-primary/300">
                    <div
                        className="relative w-full h-full flex justify-center items-center"
                        style={{ backgroundImage: `url('${body}')` }}
                    >
                        <div className="z-20 flex flex-col items-center">
                            <p className="text-center text-[25px] uppercase text-light">body record</p>
                            <button className="font-Noto_Sans_JP text[14px] h-6 bg-primary/400 text-light px-4">
                                自分のカラダの記録
                            </button>
                        </div>

                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
                    </div>
                </div>
            </div>
            <div className="w-[30%] aspect-square">
                <div className="border-[24px] h-full border-primary/300">
                    <div
                        className="relative w-full h-full flex justify-center items-center"
                        style={{ backgroundImage: `url('${exercise}')` }}
                    >
                        <div className="z-20 flex flex-col items-center">
                            <p className="text-center text-[25px] uppercase text-light">My exercise</p>
                            <button className="font-Noto_Sans_JP text[14px] h-6 bg-primary/400 text-light px-4">
                                自分の運動の記録
                            </button>
                        </div>

                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
                    </div>
                </div>
            </div>
            <div className="w-[30%] aspect-square">
                <div className="border-[24px] h-full border-primary/300">
                    <div
                        className="relative w-full h-full flex justify-center items-center"
                        style={{ backgroundImage: `url('${diary}')` }}
                    >
                        <div className="z-20 flex flex-col items-center">
                            <p className="text-center text-[25px] uppercase text-light">My diary</p>
                            <button className="font-Noto_Sans_JP text[14px] h-6 bg-primary/400 text-light px-4">
                                自分の日記
                            </button>
                        </div>

                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListActions;
