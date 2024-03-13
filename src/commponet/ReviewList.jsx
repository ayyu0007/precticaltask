import React from 'react';

const ReviewList = ({ reviews, deleteReview }) => {
  return (
    <div className="review-list">
    <h2>Reviews</h2>
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Rating</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review, index) => (
          <tr key={index}>
            <td>{review.title}</td>
            <td>{review.rating} ⭐</td>
            <td>{review.description}</td>
            <td>
              <button onClick={() => deleteReview(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default ReviewList;
