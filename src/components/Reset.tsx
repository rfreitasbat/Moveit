import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengesContext';

import style from '../styles/components/Reset.module.css'

export function Reset() {

    const { resetCookie } = useContext(ChallengesContext)
    return (
        <div  className={style.container}>
            <button type='button' onClick={resetCookie}>
                Resetar
            </button>
        </div>
    );
}