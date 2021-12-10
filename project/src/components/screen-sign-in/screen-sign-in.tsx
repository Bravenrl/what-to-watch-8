import { HeaderTitle, reEmail, rePassword, ScreenType } from '../../const';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserAuthData } from '../../types/data';
import classNames from 'classnames';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { loginAction } from '../../store/api-actions';
function ScreenSignIn(): JSX.Element {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserAuthData>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<UserAuthData> = (data) => {
    dispatch(loginAction(data));
  };
  return (
    <div className='user-page'>
      <Header screenType={ScreenType.SignIn}>
        <h1 className='page-title user-page__title'> {HeaderTitle.SignIn} </h1>
      </Header>
      <div className='sign-in user-page__content'>
        {(errors?.email || errors?.password) && (
          <div className='sign-in__message'>
            {(errors.email?.type === 'required' ||
              errors.password?.type === 'required') && (
              <p>
                We can’t recognize this email <br />
                and password combination. Please try again.
              </p>
            )}
            {errors.email?.type === 'pattern' && (
              <p>Please enter a valid email adress </p>
            )}
            {errors.password?.type === 'pattern' && (
              <p>Please enter a valid password </p>
            )}
          </div>
        )}
        <form
          action='#'
          className='sign-in__form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='sign-in__fields'>
            <div
              className={classNames('sign-in__field', {
                'sign-in__field--error': errors?.email,
              })}
            >
              <input
                className='sign-in__input'
                type='email'
                placeholder='Email address'
                autoComplete='off'
                id='user-email'
                {...register('email', {
                  required: true,
                  pattern: reEmail,
                })}
              />
              <label
                className='sign-in__label visually-hidden'
                htmlFor='user-email'
              >
                Email address
              </label>
            </div>
            <div
              className={classNames('sign-in__field', {
                'sign-in__field--error': errors?.password,
              })}
            >
              <input
                className='sign-in__input'
                type='password'
                placeholder='Password'
                autoComplete='off'
                id='user-password'
                {...register('password', {
                  required: true,
                  pattern: rePassword,
                })}
              />
              <label
                className='sign-in__label visually-hidden'
                htmlFor='user-password'
              >
                Password
              </label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button className='sign-in__btn' type='submit' disabled = {isSubmitting}>
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default ScreenSignIn;
