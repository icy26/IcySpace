import React from "react";
import "./style.css";

export const Slider = ({ slides }) => {
  const [curr, setCurr] = React.useState(0);
  const { length } = slides;

  function goToNext() {
    // Check if we've reached the final slide in the array
    // If so, go back to 0, else curr + 1
    setCurr(curr === length - 1 ? 0 : curr + 1);
  }

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <div className="container">
      <button onClick={() => goToNext()} className="nxtButton">
        Next >
      </button>
      {slides.map((s, i) => (
        <div
          className={i === curr ? "slide active" : "slide"}
          //key={s.title}
          //aria-hidden={i !== curr}
        >
          {i === curr && <img className="image" src={s.image} />}
        </div>
      ))}
    </div>
  );
};
