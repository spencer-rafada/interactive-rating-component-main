import React from "react";
import thanks from "../images/illustration-thank-you.svg";

export default function ThankYou({ rating }) {
  return (
    <div className="ratings">
      <div className="ratings__thankyou">
        <div className="ratings__thankyou__img">
          <img src={thanks} alt="thank you"></img>
        </div>
        <div className="ratings__score">
          <p>You selected out {rating} of 5</p>
        </div>
        <div className="ratings__title">
          <h1>Thank you!</h1>
        </div>
        <div className="ratings__body">
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}
