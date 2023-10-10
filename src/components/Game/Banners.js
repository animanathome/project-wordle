export const HappyBanner = ({guessCount}) => {
    return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guessCount} guesses</strong>.
          </p>
        </div>
    )
}

export const SadBanner = ({answer}) => {
    return (
        <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
    )
}