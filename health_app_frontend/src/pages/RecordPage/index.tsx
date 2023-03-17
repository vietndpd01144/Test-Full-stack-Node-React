import GoToTopButton from '@components/button/GoToTopButton';
import BodyRecordChart from './components/BodyRecordChart';
import ListActions from './components/ListAction';
import ListDiary from './components/ListDiary';
import ListExercise from './components/ListExercise';

const RecordPage: React.FC = () => {
    return (
        <>
            <div className="mb-12 max-w-[60rem] m-auto">
                <ListActions />
                <BodyRecordChart />
                <ListExercise />
                <ListDiary />
            </div>
            <GoToTopButton />
        </>
    );
};

export default RecordPage;
