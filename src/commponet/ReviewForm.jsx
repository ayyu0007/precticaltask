import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) return;
    addReview({ title, rating, description });
    setTitle('');
    setRating(0);
    setDescription('');
  };

  return (
    <div className="review-form">
      <h2>Give Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title<span>*</span></label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating<span>*</span></label>
          <input type="number" id="rating" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => { setTitle(''); setRating(0); setDescription(''); }}>Reset</button>
        </div>
      </form>
    </div>

  );
};

export default ReviewForm;
