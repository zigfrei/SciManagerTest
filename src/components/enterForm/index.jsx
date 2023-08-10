import styles from './enterForm.module.scss';
import { useState } from "react";


export const EnterForm = ({
  id,
  label,
  extraClass = "",
  ...rest
}) =>{
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [link, setLink] = useState("");

  const onChangeInput = (e) => {
    setLink(e.target.value);
  };

  const sentLink = () => {
    //
  };

  return (
    <div className={`${styles.content} ${extraClass}`}>
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        name={'link'}
        value={link}
        onChange={onChangeInput}
        className={styles.input}
        {...rest}
      />
        <button
          type="button"
          className={styles.button}
          onClick={sentLink}
        >
        </button>
        {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
}

