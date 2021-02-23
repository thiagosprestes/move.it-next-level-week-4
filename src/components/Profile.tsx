import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/thiagosprestes.png" />
      <div>
        <strong>Thiago Prestes</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
