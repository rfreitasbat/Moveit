import { useContext } from 'react'
import { ChallengesContext } from '../Contexts/ChallengesContext'
import { CountdownContext } from '../Contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallange } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function hendChallengeSucceeded() {
        completeChallange();
        resetCountdown();
    }

    function hendChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={ styles.challengeBoxContainer } >
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header> Ganhe { activeChallenge.amount } XP</header>

                    <main>
                        <img src={ `icons/${ activeChallenge.type }.svg` } alt="Body"/>
                        <strong> Novo desafio!</strong>
                        <p> { activeChallenge.description }</p>
                    </main>

                    <footer>
                        <button 
                            type="button" 
                            className={styles.challengeSucceededButton} 
                            onClick={hendChallengeSucceeded}
                        >
                            Completei 
                        </button>

                        <button 
                            type="button" 
                            className={styles.challengeFailedButton}
                            onClick={hendChallengeFailed}
                        > 
                            Falhei 
                        </button>


                    </footer>

                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong> Finalize um ciclo para subir de nível </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance seu level completando desafios
                    </p>
                </div>
            )}

        </div>
    )
}