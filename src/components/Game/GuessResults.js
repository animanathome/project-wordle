import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import {checkGuess} from "../../game-helpers";
const Guess = ({guess, answer}) => {
    const result = checkGuess(guess, answer);

    return (
        <p className="guess">
            {result.map((item, index) => {
                return <span
                    key={index}
                    className={"cell " + item.status}
                >
                    {item.letter}
                </span>;
            })}
      </p>
    )
}

export const GuessResults = ({guesses, answer}) => {
    return (
        <div className="guess-results">
            {guesses
                .slice(0, NUM_OF_GUESSES_ALLOWED)
                .map((guess, index) => (
                    <Guess key={index} guess={guess} answer={answer}/>
                ))
            }
        </div>
    );
};