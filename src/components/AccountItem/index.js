import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../AccountItem/AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function AccountItem() {
    return (
        <div className={styles.wrapper}>
            <img
                className={styles.avatar}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/dd8a8046db98a9040006b93039217ee8.jpeg?lk3s=a5d48078&nonce=50344&refresh_token=7b91ef7082e854db80580c6b6f880f1b&x-expires=1718859600&x-signature=pAtlHx8B1nflZPEqq1N43J5wGKE%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={styles.info}>
                <h4 className={styles.name}>
                    <span>nguyen van a</span>
                    <FontAwesomeIcon
                        className={styles.check}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={styles.userName}>asddfdfds</span>
            </div>
        </div>
    );
}
export default AccountItem;
