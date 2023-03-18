interface ImageItemInterface {
    text: string;
    imagePath: string;
}
const ImageItem: React.FC<ImageItemInterface> = ({ text, imagePath }) => {
    return (
        <div className="relative">
            <img className="w-full h-full" src={imagePath} alt="" />
            <div className="absolute bottom-0 left-0 bg-primary/300 p-[7px]">
                <p className="text-[15px] text-light">{text} </p>
            </div>
        </div>
    );
};

export default ImageItem;
