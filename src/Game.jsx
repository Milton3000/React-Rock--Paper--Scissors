import React, { useState } from "react";
import styles from "./Game.module.css";

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

const choiceStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: 40
  };
  const emojiStyles = {
    fontSize: 44,
    marginRight: 20
  };
  const nameStyles = {
    margin: 0,
    fontSize: 24,
    color: "#ffff"
  };
  const resultStyle = {
    marginTop: 40,
    fontSize: 48,
    color: "#ffff"
  };
  

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handlePlayerChoice = (choice) => {
    const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    if (choice.name === computerChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && computerChoice.name === "scissors") ||
      (choice.name === "paper" && computerChoice.name === "rock") ||
      (choice.name === "scissors" && computerChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  function resetGame() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  }

  return (
    <div className={styles.container}>
      <h1 style={{ fontSize: 48, marginTop: 0 }}>Rock Paper Scissors</h1>
      <div>
        {CHOICES.map((choice) => (
          <button
            className={styles.choices}
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className={styles.results}>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{playerChoice.emoji}</span>
            <p style={nameStyles}>You chose {playerChoice.name}</p>
          </div>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{computerChoice.emoji}</span>
            <p style={nameStyles}>The computer chose {computerChoice.name}</p>
          </div>
          <h2 style={resultStyle}>{result}</h2>
          <button className={styles.button} onClick={resetGame}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
