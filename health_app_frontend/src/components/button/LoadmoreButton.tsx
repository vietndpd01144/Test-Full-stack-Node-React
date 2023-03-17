interface LoadMoreButtonProps {
    label: string;
    onClick: Function;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick()}
            className="text-[18px] leading-[26px] font-Noto_Sans_JP bg-primary-300/400 hover:bg-primary-400/300 py-[14px] px-10 rounded-md text-light"
        >
            {label}
        </button>
    );
};

export default LoadMoreButton;
