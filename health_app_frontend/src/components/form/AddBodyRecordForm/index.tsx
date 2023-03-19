import Input from '@components/Input/Input';
import { Status } from '@config/enum/status';
import { yupResolver } from '@hookform/resolvers/yup';
import { addBodyRecordAction } from '@redux/slices';
import { AddBodyRecordDataForm } from '@redux/slices/bodyRecordSlice/interfaces';
import { useAppDispatch, useAppSelector } from '@redux/store';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const AddBodyRecordForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { addBodyRecordStatus } = useAppSelector((state) => state.bodyRecord);
    const schema = yup.object({
        weight: yup.number().required('Please enter a weight').typeError('Age must be a number'),
        fatPercentage: yup
            .number()
            .required('Please enter fast percentage')
            .typeError('Fast percentage must be a number')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AddBodyRecordDataForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: AddBodyRecordDataForm) => {
        dispatch(addBodyRecordAction(data));
    };
    return (
        <div className="pt-14">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Weight"
                    placeholder="weight"
                    errorText={errors.weight?.message}
                    {...register('weight')}
                    autoComplete="off"
                />
                <Input
                    label="Fast percentage"
                    placeholder="Fast percentage"
                    errorText={errors.fatPercentage?.message}
                    {...register('fatPercentage')}
                    autoComplete="off"
                />
                <button
                    className={classNames(
                        'bg-primary/400 text-black text-[0.875rem] font-bold uppercase h-12 px-8 rounded-3xl relative overflow-hidden group w-full mt-4 mb-10',
                        {
                            'opacity-60': addBodyRecordStatus === Status.LOADING
                        }
                    )}
                    type="submit"
                >
                    add
                    <div
                        className={classNames('absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10', {
                            'group-hover:opacity-0': addBodyRecordStatus !== Status.LOADING
                        })}
                    ></div>
                </button>
            </form>
        </div>
    );
};

export default AddBodyRecordForm;
