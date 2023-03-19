import * as yup from 'yup';
import Input from '@components/Input/Input';
import { passwordRegex } from '@config/regex';
import { SignUpDataForm } from '@redux/slices/userSlice/interface';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { clearStatus, signUpAction } from '@redux/slices';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Status } from '@config/enum/status';

const RegisterForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { signUpStatus } = useAppSelector((state) => state.user);

    //Clear persist state
    useEffect(() => {
        dispatch(clearStatus());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Redirect to login page when sign up is successful
    useEffect(() => {
        if (signUpStatus === Status.SUCCESS) {
            navigate('/auth/sign-in');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [signUpStatus]);

    const schema = yup.object({
        email: yup.string().email('Email is invalid.').required('Please enter your email.'),
        password: yup
            .string()
            .matches(passwordRegex, {
                message:
                    'Password must have at least 6 characters, including at least 1 lowercase letter, 1 uppercase letter and 1 special character.'
            })
            .required('Please enter password.'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match.'),
        name: yup.string().required('Please enter your name.'),
        acceptMarketing: yup.boolean()
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpDataForm>({
        resolver: yupResolver(schema),
        defaultValues: { email: '', password: '', confirmPassword: '' }
    });

    const onSubmit = (data: SignUpDataForm) => {
        dispatch(signUpAction(data));
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                <Input
                    label="Email"
                    placeholder="Email"
                    errorText={errors.email?.message}
                    {...register('email')}
                    autoComplete="off"
                />
                <Input
                    label="Your name"
                    placeholder="Your name"
                    errorText={errors.name?.message}
                    {...register('name')}
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
                <Input
                    label="Confirm password"
                    placeholder="Confirm password"
                    errorText={errors.confirmPassword?.message}
                    {...register('confirmPassword')}
                    type={'password'}
                    autoComplete="off"
                />

                <button
                    className={classNames(
                        'bg-primary/400 w-full mt-10 text-black text-[0.875rem] font-bold uppercase h-12 px-8 rounded-3xl relative overflow-hidden group'
                        // {
                        //   "opacity-60": loginStatus === Status.LOADING,
                        // }
                    )}
                    type="submit"
                >
                    Sign up
                    <div
                        className={classNames(
                            'absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10'
                            // {
                            //   "group-hover:opacity-0": loginStatus !== Status.LOADING,
                            // }
                        )}
                    ></div>
                </button>
            </form>
        </>
    );
};

export default RegisterForm;
