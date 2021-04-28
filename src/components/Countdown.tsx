import { useContext } from "react";
import { CountdownContext } from "../Contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css";

export function Countdown() {

  const { 
    minutes,
    seconds, 
    hasFinished, 
    active, 
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext)
  

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [seconfLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span> {minuteLeft} </span>
          <span> {minuteRight} </span>
        </div>
        <span> : </span>
        <div>
          <span> {seconfLeft} </span>
          <span> {secondRight} </span>
        </div>
      </div>

      {hasFinished ? (
        <button 
          disabled 
          className={styles.countdownButton}
        >
          Ciclo Encerrado
          <img src="icons/level.svg" alt="finished"/>
        </button>
      ) : (
        <>
          {active ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar Ciclo
              <img src="icons/close.svg" alt="finished"/>
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
