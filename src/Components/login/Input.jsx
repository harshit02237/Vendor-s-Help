import styles from './Input.module.css';

const Input = () => {
    return <>
        <div className={styles.div}>
            <input type="text" placeholder="Email" className={styles.Input}></input>
        </div>
    <div className={styles.div2}>
            <input type="password" placeholder="Password" className={styles.Input}/>
    </div>
    </>
}

export default Input;