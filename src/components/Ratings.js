import React from "react";
import star from "../images/icon-star.svg";

export default function Ratings({ submitClick, ratings, ratingClick, rating }) {
  return (
    <div className="ratings">
      <div className="ratings__rating">
        {/* <!-- Rating state start --> */}
        <div className="ratings__star">
          <img src={star} alt="star" />
        </div>
        <div className="ratings__title">
          <h1>How did we do?</h1>
        </div>
        <div className="ratings__body">
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="ratings__form">
          {/* TODO change this to a form */}
          <div className="ratings__form__input">
            {ratings.map((value, index) => {
              return (
                <button
                  type="button"
                  className="ratings__form__input-value"
                  onClick={(value) => ratingClick(value)}
                  key={index}
                  value={value}
                >
                  {value}
                </button>
              );
            })}
          </div>
          <button className="ratings__form__button" onClick={submitClick}>
            Submit
          </button>
        </div>
        {/* <!-- Rating state end --> */}
      </div>
    </div>
  );
}
