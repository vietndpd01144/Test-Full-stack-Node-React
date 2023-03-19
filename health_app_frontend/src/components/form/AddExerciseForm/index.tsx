import Input from '@components/Input/Input';
import { Status } from '@config/enum/status';
import { yupResolver } from '@hookform/resolvers/yup';
import { addExerciseAction } from '@redux/slices';
import { AddExerciseDataForm } from '@redux/slices/exerciseSlice/interface';
import { useAppDispatch, useAppSelector } from '@redux/store';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const AddExerciseForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { addDiaryStatus } = useAppSelector((state) => state.diary);
    const schema = yup.object({
        name: yup.string().required('Please enter name of exercise').typeError('Name must be a string'),
        calorie: yup.number().required('Please enter note').typeError('This note must be a number'),
        time: yup.number().required('Please enter time').typeError('This note must be a number')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AddExerciseDataForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: AddExerciseDataForm) => {
        dispatch(addExerciseAction(data));
    };
    return (
        <div className="pt-14">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Name exercise"
                    placeholder="Name exercise"
                    errorText={errors.name?.message}
                    {...register('name')}
                    autoComplete="off"
                />
                <Input
                    label="Calorie"
                    placeholder="Calorie"
                    errorText={errors.calorie?.message}
                    {...register('calorie')}
                    autoComplete="off"
                />
                <Input
                    label="Time (minutes)"
                    placeholder="Time"
                    errorText={errors.time?.message}
                    {...register('time')}
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

export default AddExerciseForm;
