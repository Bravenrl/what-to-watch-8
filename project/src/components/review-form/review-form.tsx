import React, { ChangeEvent, useState } from 'react';
import { STARS } from '../../const';

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  return (
    <form action='#' className='add-review__form'>
      <div className='rating'>
        <div className='rating__stars'>
          {STARS.map((star) => (
            <React.Fragment key={star}>
              <input
                className='rating__input'
                id={`star-${star}`}
                type='radio'
                name='rating'
                value={star}
                checked={star === rating}
                onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                  setRating(+evt.target.value)}
              />
              <label
                className='rating__label'
                htmlFor={`star-${star}`}
              >{`Rating ${star}`}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className='add-review__text'>
        <textarea
          className='add-review__textarea'
          name='review-text'
          id='review-text'
          placeholder='Review text'
          value={review}
          onChange={(evt) => setReview(evt.target.value)}
        >
        </textarea>
        <div className='add-review__submit'>
          <button className='add-review__btn' type='submit'>
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
