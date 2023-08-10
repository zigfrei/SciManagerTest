import styles from './app.module.scss';
import {EnterForm} from '../enterForm/index';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1 className={styles.appHeaderTittle}>Сокращатель</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.column}>
        <EnterForm
         id = {1}
        label="Введите ссылку"

        >
         

        </EnterForm>
        </div>
        <div className={styles.column}>
          
          </div>
      </main>
    </div>
  );
}

export default App;