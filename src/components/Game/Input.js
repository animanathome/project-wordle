import React from 'react';

export const Input = ({disabled, setGuess}) => {
    const [input, setInput] = React.useState('');

    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                setGuess(input);
                setInput('');
                }
            } className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={input}
                disabled={disabled}
                onChange={(event) => {
                    setInput(event.target.value);
                }}
            />
        </form>
    )
}