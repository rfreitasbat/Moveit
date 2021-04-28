import { createContext, ReactNode, useEffect, useState } from "react"
import Cookie from 'js-cookie'
import challenges from "../../challenges.json"
import { LevelUoModal } from "../components/LevelUpModal";

export const ChallengesContext = createContext({} as ChallengesContexData);

interface ChallengesProviderProps {
    children: ReactNode
    level: number;
    currentExperience: number;
    challengesCompletedes: number;
}

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContexData {
    level: number;
    currentExperience: number; 
    challengesCompletedes: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallege: () => void;
    resetChallenge: () => void;
    completeChallange: () => void;
    closeLevelUpModel: () => void;
    resetCookie: () => void;
}

export function ChallengesProvider ({ children, ...rest }: ChallengesProviderProps) {
    const [ level, setLevel ] = useState( rest.level ?? 1 );
    const [ currentExperience, setCurrentExperience ] = useState( rest.currentExperience ?? 0 );
    const [ challengesCompletedes, setChallengesCompletedes ] = useState( rest.challengesCompletedes ?? 0 );

    const [ activeChallenge, setActiveChallenge ] = useState(null);
    const [  levelUpModalOpen, setLevelUpModalOpen ] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        Cookie.set('level', String(level));
        Cookie.set('currentExperience', String(currentExperience));
        Cookie.set('challengesCompletedes', String(challengesCompletedes));
    },[level, currentExperience, challengesCompletedes]);

    function levelUp() {
      setLevel(level + 1);
      setLevelUpModalOpen(true);
    }

    function closeLevelUpModel() {
        setLevelUpModalOpen(false);
    }

    function startNewChallege() {
        const randomChallengeIndex = Math.floor( Math.random() * challenges.length )
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if(Notification.permission ==  'granted' ) {
            new Notification('Novo desafio !!!', {
                body: `Valendo ${challenge.amount}XP!!!`
            })
        }

        
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallange() {
        if(!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperiece = currentExperience + amount;   
        
        if ( finalExperiece >= experienceToNextLevel ) {
            finalExperiece = finalExperiece - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperiece);
        setActiveChallenge(null);
        setChallengesCompletedes(challengesCompletedes + 1);

    }

    function resetCookie() {
        setLevel(1);
        setChallengesCompletedes(0);
        setCurrentExperience(0);
    }

    return (
        <ChallengesContext.Provider value={{ 
            level, 
            currentExperience, 
            challengesCompletedes,
            experienceToNextLevel, 
            activeChallenge,
            levelUp,
            startNewChallege,
            resetChallenge,
            completeChallange,
            closeLevelUpModel,
            resetCookie
        }}>
            {children}

            {levelUpModalOpen && <LevelUoModal/>}
        </ChallengesContext.Provider>
    )
}