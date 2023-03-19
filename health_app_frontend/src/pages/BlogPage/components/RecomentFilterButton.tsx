interface ReCommentButton {
    name: string;
    subString: string;
    data: 'INSTRUCT' | 'DIET' | 'BEAUTY' | 'HEALTH';
}
const ReCommentFilter: React.FC = () => {
    const datas: ReCommentButton[] = [
        {
            name: 'recommended column',
            subString: 'オススメ',
            data: 'INSTRUCT'
        },
        {
            name: 'recommended diet',
            subString: 'ダイエット',
            data: 'DIET'
        },
        {
            name: 'recommended BEAUTY',
            subString: '美容',
            data: 'BEAUTY'
        },
        {
            name: 'recommended HEALTH',
            subString: '健康',
            data: 'HEALTH'
        }
    ];
    return (
        <div className=" max-w-[60rem] lg:max-w-[40rem] sm:max-w-[18rem] m-auto pt-14">
            <div className="flex flex-wrap justify-between mx-[-1rem]">
                {datas.map((data) => (
                    <div key={data.data} className=" w-1/4 lg:w-1/2 sm:w-full">
                        <div className="bg-dark/600 m-4 px-2 py-6 flex flex-col justify-center items-center aspect-5/3">
                            <p className="uppercase text-[22px] text-center leading-[27px]  text-primary/300">
                                {data.name}
                            </p>
                            <hr className="w-14 mt-2.5 mb-2" />
                            <p className="text-light font-Noto_Sans_JP">{data.subString}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ReCommentFilter;
