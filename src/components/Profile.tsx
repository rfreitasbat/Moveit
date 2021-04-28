import { useContext } from "react";
import { ChallengesContext } from "../Contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

export function Profile() {
  
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/68833743?s=60&v=4" alt="Ramon Batista" />
      <div>
        <strong> Ramon Batista</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level { level }
        </p>
      </div>
    </div>
  );
}
