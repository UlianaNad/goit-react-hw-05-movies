import useHttp from 'components/hooks/useHttp';
import { fetchReviewsByMovieId } from 'components/servises/api';
import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledWrap, Styledli, WrapUl } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews] = useHttp(fetchReviewsByMovieId, movieId);

  return (
    <div>
      <WrapUl>
        {reviews?.length !== 0 ? (
          reviews?.map(review => (
            <Styledli key={review.id}>
              <p>{review.content}</p>
              <StyledWrap>
                <p>{review.author}</p>
                <p>{review.created_at}</p>
              </StyledWrap>
            </Styledli>
          ))
        ) : (
          <h2>There is no reviews yet...</h2>
        )}
      </WrapUl>
    </div>
  );
};

export default Reviews;
