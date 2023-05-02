import {
  NEXT_QUOTE,
  PREVIOUS_QUOTE,
  RANDOM_QUOTE,
} from "../actionTypes/actionTypes";
import { quotes } from "../quotes/quotes";

const initialState = { quotes: quotes, quote: 0 };

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_QUOTE:
      if (state.quote + 1 >= state.quotes.length) {
        return {
          quotes: quotes,
          quote: 0,
        };
      } else {
        return {
          quotes: quotes,
          quote: state.quote + 1,
        };
      }
    case PREVIOUS_QUOTE:
      if (state.quote - 1 < 0) {
        return {
          ...state,
          quote: state.quotes.length - 1,
        };
      } else {
        return {
          ...state,

          quote: state.quote - 1,
        };
      }
    case RANDOM_QUOTE:
      let quotesRandom = parseInt(Math.random() * state.quotes.length);
      while (quotesRandom === state.quote) {
        quotesRandom = parseInt(Math.random() * state.quotes.length);
      }
      return {
        quotes: quotes,
        quote: quotesRandom,
      };

    default:
      return state;
  }
};

export default quoteReducer;
