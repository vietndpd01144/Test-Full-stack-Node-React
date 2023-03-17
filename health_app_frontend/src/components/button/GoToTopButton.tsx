import arrowUp from '@assets/icons/arrow_up.png';
const GoToTopButton: React.FC = () => {
    return (
        <button
            className="border border-dark/400 w-10 h-10 flex justify-center items-center rounded-full fixed bottom-40 right-5 "
            onClick={() => {
                window.scrollTo(0, 0);
            }}
        >
            <img src={arrowUp} />
        </button>
    );
};
export default GoToTopButton;
