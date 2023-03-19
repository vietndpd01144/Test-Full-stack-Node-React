import GoToTopButton from '@components/button/GoToTopButton';
import ReCommentFilter from './components/RecomentFilterButton';
import ListBog from './components/ListBlog';

const BlogPage: React.FC = () => {
    return (
        <>
            <div className="mb-12">
                <ReCommentFilter />
                <ListBog />
            </div>
            <GoToTopButton />
        </>
    );
};

export default BlogPage;
