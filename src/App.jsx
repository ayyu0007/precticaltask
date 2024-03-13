import React, { useState } from 'react';
import './app.css';
import ReviewForm from './commponet/ReviewForm';
import ReviewList from './commponet/ReviewList';

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const deleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div className="App">
      <h1> Reviews App</h1>
      <div className="sections">
        <ReviewForm addReview={addReview} />
        <ReviewList reviews={reviews} deleteReview={deleteReview} />
      </div>
    </div>
  );
}

export default App;
