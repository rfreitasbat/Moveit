import { useContext } from 'react'
import { ChallengesContext } from '../Contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const { challengesCompletedes } = useContext( ChallengesContext )
    return (
        <div className={styles.completedChallengesContainer}>
            <span> Desafios Concluídos </span>
            <span> { challengesCompletedes } </span>
        </div>
    )
}