import styles from './Popper.module.scss';
function Wrapper({ children }) {
    return <div className={styles.wapper}>{children}</div>;
}
export default Wrapper;
