import { useState } from 'react';
import styles from './AddUser.module.css';
import BaseCard from '../UI/BaseCard';
import BaseButton from '../UI/BaseButton';
import BaseModal from '../UI/BaseModal';


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('');
    const [errorModal, setErrorModal] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorModal({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            })
            return ;
        }
        //we can force enteredAge as a number with the +. because generally useState makes number a string the same with the input fields.
        if (+enteredAge < 1) {
            setErrorModal({
                message: 'Please enter a valid age greater than -1'
            })
            return;
        }
        
        //forwarding the entered data to the app component
        props.onAddUsers(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        //we can use event.target.value to get the entered values by the user
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const toggleErrorModal = () => {
        setErrorModal(null);
    }

    return (
        <div>
            {errorModal && (<BaseModal 
                    title={errorModal.title} 
                    message={errorModal.message}
                    onConfirm={toggleErrorModal}
                    />
                )}
                <BaseCard className={styles.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username:</label>
                            <input 
                            type="text" 
                            id="username" 
                            value={enteredUsername} 
                            onChange={usernameChangeHandler} 
                            />
                        <label htmlFor="age">Age: (Years)</label>
                            <input 
                            type="number" 
                            id="age" 
                            value={enteredAge} 
                            onChange={ageChangeHandler} 
                            />
                            <BaseButton type="submit">Add User</BaseButton>
                    </form>
                </BaseCard>
        </div>
    );
}


export default AddUser;