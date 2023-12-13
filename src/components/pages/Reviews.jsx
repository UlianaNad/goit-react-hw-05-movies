import useHttp from 'components/hooks/useHttp';
import { fetchReviewsByMovieId } from 'components/services/api';
import React from 'react'
import { useParams } from 'react-router-dom'

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews] = useHttp(fetchReviewsByMovieId, movieId);

  return (
    <div>
        <ul>
            {reviews?.map(review => (
                <li key={review.id}>
                    <p>{review.content}</p>
                    <p>{review.author}</p>
                    <p>{review.created_at}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Reviews