import {
  NEXT_QUOTE,
  PREVIOUS_QUOTE,
  RANDOM_QUOTE,
} from "../actionTypes/actionTypes";

const nextQuote = () => {
  return {
    type: NEXT_QUOTE,
  };
};

const previousQuote = () => {
  return {
    type: PREVIOUS_QUOTE,
  };
};
const randomQuote = () => {
  console.log();
  return {
    type: RANDOM_QUOTE,
  };
};

export { nextQuote, previousQuote, randomQuote };
