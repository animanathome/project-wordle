import React from 'react';

import {Input} from "./Input";
import { sample } from '../../utils';
import { WORDS } from '../../data';
import {GuessResults} from "./GuessResults";
import {HappyBanner, SadBanner} from "./Banners";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('playing');

  const addGuess = (guess) => {
    // validate guess
    let validated = guess;
    if (validated.length !== 5) {
        window.alert('Guess must be 5 characters long.');
        return;
    }
    let validatedAndUppercase = validated.toUpperCase();

    // add guess
    const newGuesses = [...guesses];
    newGuesses.push(validatedAndUppercase);
    setGuesses(newGuesses);

    // determine outcome
    if (validatedAndUppercase === answer) {
        setStatus('won');
    }
    else if (NUM_OF_GUESSES_ALLOWED <= newGuesses.length) {
        setStatus('lost');
    }
  };

  return (
      <>
            <GuessResults guesses={guesses} answer={answer}/>
            {status === 'won' && <HappyBanner guessCount={guesses.length}/>}
            {status === 'lost' && <SadBanner answer={answer}/>}
            <Input disabled={status !== 'playing'} setGuess={addGuess}/>
      </>
  );
}

export default Game;
