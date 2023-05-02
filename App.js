import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import {
  previousQuote,
  nextQuote,
  randomQuote,
} from "../src/actions/cartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <div id="quote-box" className="block-quote">
        <p id="text" className="quote">
          {state.quotes[state.quote]}
        </p>
        <a
          title="Tweet this quote!"
          href="https://twitter.com/intent/tweet"
          
          target="_blank"
          rel="noreferrer"
          className="icon inline-block"
          
        >
          <FontAwesomeIcon icon={faRetweet} />
        </a>

        <span id="author" className="lucian inline-block">
          - Lucian
        </span>
      </div>
      <div id="new-quote" className="buttons">
        <button
          className="button"
          onClick={() => {
            dispatch(randomQuote());
          }}
        >
          Random quote
        </button>
        <button
          className="button"
          onClick={() => {
            dispatch(nextQuote());
          }}
        >
          Next quote
        </button>
        <button
          className="button"
          onClick={() => {
            dispatch(previousQuote());
          }}
        >
          Previous quote
        </button>
      </div>
    </div>
  );
};

export default App;
