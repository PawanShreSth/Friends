import React, { useState } from 'react';
import friends from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = friends[index];

  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1;
      if (newIndex === friends.length) return 0;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1;
      if (newIndex < 0) return friends.length - 1;
      return newIndex;
    });
  };

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * friends.length);
    // console.log(randomNumber);
    setIndex(randomNumber);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
