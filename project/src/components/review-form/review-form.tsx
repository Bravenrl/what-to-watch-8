import React from 'react';
import { AppRoute, PostValues, STARS } from '../../const';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CommentPost } from '../../types/data';
import { postCommentData } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import {
  generatePath,
  useNavigate,
  useParams
} from 'react-router-dom';
import { RequestStatus } from '../../services/const';
import { useSelector } from 'react-redux';
import { getIsDataPosting } from '../../store/app-data/selectors-app-data';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const filmId = id ?? '';
  const isDataPosting = useSelector(getIsDataPosting);
  const moviePath = generatePath(AppRoute.Film, { id: filmId });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm<CommentPost>({
    mode: 'onChange',
    defaultValues: {
      rating: PostValues.RatingDefault,
      comment: PostValues.CommentDefault,
    },
  });
  const onSubmit: SubmitHandler<CommentPost> = (comment) => {
    dispatch(
      postCommentData({
        id: filmId,
        comment,
      }),
    ).then(({ meta }) => {
      if (meta.requestStatus.match(RequestStatus.Fulfilled)) {
        navigate(moviePath);
      }
    });
  };
  const ratingValue = watch('rating');
  const commentValue = watch('comment');

  return (
    <form
      action='#'
      className='add-review__form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset disabled = {isDataPosting}>
        <div className='rating'>
          <div className='rating__stars'>
            {STARS.map((star) => (
              <React.Fragment key={star}>
                <input
                  className='rating__input'
                  id={`star-${star}`}
                  type='radio'
                  {...register('rating', {
                    required: true,
                    value: star,
                  })}
                  value={star}
                />
                <label className='rating__label' htmlFor={`star-${star}`}>
                  {`Rating ${star}`}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className='add-review__text'>
          <textarea
            className='add-review__textarea'
            id='review-text'
            placeholder='Review text'
            {...register('comment', {
              required: true,
              minLength: 50,
              maxLength: 400,
            })}
          >
          </textarea>
          <div className='add-review__submit'>
            <button
              className='add-review__btn'
              type='submit'
              disabled={!isValid || isDataPosting}
            >
              Post
            </button>
          </div>
          {!isValid && (
            <div
              style={{
                paddingLeft: '25px',
                color: '#000',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '12px',
              }}
            >
              {ratingValue === PostValues.RatingDefault && (
                <p>{PostValues.RatingErr}</p>
              )}
              {(errors?.comment || commentValue.length === 0) && (
                <p>{PostValues.CommentErr}</p>
              )}
            </div>
          )}
        </div>
      </fieldset>
    </form>
  );
}

export default ReviewForm;
