import { useContext } from 'react'

import { ChallengesContext } from '../Contexts/ChallengesContext'
import styles from  '../styles/components/LevelUpModal.module.css'

export function LevelUoModal() {
    const { level, closeLevelUpModel } = useContext(ChallengesContext);

    return(
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo nível. !!!</p>

                <button type="button" onClick={closeLevelUpModel}>
                    <img src="/icons/close.svg" alt="Fechar Modal"/>
                </button>

            </div>
        </div>
    )
}