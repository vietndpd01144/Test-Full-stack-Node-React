import Input from '@components/Input/Input';
import { Status } from '@config/enum/status';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDiaryAction } from '@redux/slices';
import { AddDiaryDataForm } from '@redux/slices/diarySlice/interface';
import { useAppDispatch, useAppSelector } from '@redux/store';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const AddDiaryForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { addDiaryStatus } = useAppSelector((state) => state.diary);
    const schema = yup.object({
        title: yup.string().required('Please enter a title').typeError('Age must be a string'),
        description: yup.string().required('Please enter note').typeError('This note must be a string')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AddDiaryDataForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: AddDiaryDataForm) => {
        dispatch(addDiaryAction(data));
    };
    return (
        <div className="pt-14">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Title"
                    placeholder="Title"
                    errorText={errors.title?.message}
                    {...register('title')}
                    autoComplete="off"
                />
                <Input
                    label="Description"
                    placeholder="Description"
                    errorText={errors.description?.message}
                    {...register('description')}
                    autoComplete="off"
                />
                <button
                    className={classNames(
                        'bg-primary/400 text-black text-[0.875rem] font-bold uppercase h-12 px-8 rounded-3xl relative overflow-hidden group w-full mt-4 mb-10',
                        {
                            'opacity-60': addDiaryStatus === Status.LOADING
                        }
                    )}
                    type="submit"
                >
                    add
                    <div
                        className={classNames('absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10', {
                            'group-hover:opacity-0': addDiaryStatus !== Status.LOADING
                        })}
                    ></div>
                </button>
            </form>
        </div>
    );
};

export default AddDiaryForm;
