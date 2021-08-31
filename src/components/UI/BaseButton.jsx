import styles from './BaseButton.module.css';

const BaseButton = (props) => {


    //type={props.type} is undefined. || 'button' will act as a fallback
    //we use props.onClick any function recived there is passed onto the built in button component through its onclick prop
    return (
        <button 
            className={`${styles.button}`} 
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default BaseButton;