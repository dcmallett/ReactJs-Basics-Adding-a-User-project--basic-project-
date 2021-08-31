import styles from './BaseModal.module.css';
import BaseButton from './BaseButton';

const BaseModal = (props) => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2></h2>
                </div>
                <div className={styles.content}>

                </div>
                <BaseButton>Close</BaseButton>
            </div>
        </div>
    );
}

export default BaseModal;