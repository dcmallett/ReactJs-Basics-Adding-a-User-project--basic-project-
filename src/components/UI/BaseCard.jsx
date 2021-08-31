import styles from './BaseCard.module.css';

const BaseCard = (props) => {

    
//were using string interpolation. and we are calling our own card styles will be used.
//but also we are calling props.className. So that any elements that our card component is wrapped around.
//will still be used correctly.
    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    );
}

export default BaseCard;