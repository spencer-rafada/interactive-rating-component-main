import { React, useState } from "react";
import "./style/style.css";
import Ratings from "./components/Ratings";
import ThankYou from "./components/ThankYou";

function App() {
  const [state, setState] = useState("ratings");
  const [rating, setRating] = useState();
  const ratings = [1, 2, 3, 4, 5];

  const handleSubmitPressed = () => {
    if (state === "ratings") {
      setState("thanks");
    } else {
      setState("ratings");
    }
    console.log(state);
  };

  const ratingButtonPressed = (e) => {
    setRating(e);
    console.log(e);
  };
  return (
    <div className="background">
      {state === "ratings" && (
        <Ratings
          submitClick={handleSubmitPressed}
          ratings={ratings}
          ratingClick={ratingButtonPressed}
          rating={rating}
        />
      )}
      {state === "thanks" && <ThankYou rating={rating} />}
    </div>
  );
}

export default App;
