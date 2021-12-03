import styles from './styles/App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.appHeader}></header>
            <main>
                <section className={styles.propertyCardListContainer}>
                    <ul className={styles.propertyCardList}></ul>
                </section>
                <section className={styles.propertyLeaseListContainer}></section>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
