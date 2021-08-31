import styles from './UsersList.module.css';
import BaseCard from '../UI/BaseCard';


const UsersList = (props) => {
    return (
        <BaseCard className={styles.users}>
            <ul>
                {/* users => can be any name. but name of what you expect i.e here we expect to get a prop property name of users */}

                {/*map() executes a function of every user in the array.  anon arrow func. we return a jsx element for every user of the users array we expect to get*/}
                {props.users.map((user) => (
                    <li key={user.id}>
                         {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </BaseCard>
    );
}

export default UsersList;