import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import Input from '@components/Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginDataForm } from '@redux/slices/userSlice/interface';
import { RootState, useAppDispatch } from '@redux/store';
import { clearStatus, signInAction } from '@redux/slices';
import { Status } from '@config/enum/status';
import { useEffect } from 'react';

export const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();

    //Clear persist state
    useEffect(() => {
        dispatch(clearStatus());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { signInStatus } = useSelector((state: RootState) => state.user);
    const schema = yup.object({
        email: yup.string().email('Email must be an email. ').required('Please enter a valid email address.'),
        password: yup.string().required('Please enter password')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginDataForm>({
        resolver: yupResolver(schema),
        defaultValues: { email: '', password: '' }
    });

    const onSubmit = (data: LoginDataForm) => {
        if (signInStatus !== Status.LOADING) {
            dispatch(signInAction(data));
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <Input
                label="Email"
                placeholder="Email"
                errorText={errors.email?.message}
                {...register('email')}
                autoComplete="off"
            />
            <Input
                label="Password"
                placeholder="Password"
                errorText={errors.password?.message}
                {...register('password')}
                type={'password'}
                autoComplete="off"
            />

            <button
                className={classNames(
                    'bg-primary/400 text-black text-[0.875rem] font-bold uppercase h-12 px-8 rounded-3xl relative overflow-hidden group w-full mt-8',
                    {
                        'opacity-60': signInStatus === Status.LOADING
                    }
                )}
                type="submit"
            >
                Sign in
                <div
                    className={classNames('absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10', {
                        'group-hover:opacity-0': signInStatus !== Status.LOADING
                    })}
                ></div>
            </button>
        </form>
    );
};
