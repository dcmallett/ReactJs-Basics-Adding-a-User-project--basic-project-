import styles from './BaseModal.module.css';
import BaseButton from './BaseButton';
import BaseCard from './BaseCard';


const BaseModal = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onConfirm}>
            <BaseCard className={styles.modal}>
                <div className={styles.header}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <BaseButton>Close</BaseButton>
                </footer>
            </BaseCard>
        </div>
    );
}

export default BaseModal;