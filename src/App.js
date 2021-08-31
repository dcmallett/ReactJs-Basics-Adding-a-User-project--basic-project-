import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {

  //we want to use useState() here it is the one component above AddUSer and UsersList and we lift the state managment up to this App component
  const [usersList, setUsersList] = useState([])

  /*
    so we are using a function to update our state we are taking a copy of the previous state.
    then we use the spread oporator which pulls all elements out of the array, and then adds them as new elements to the new array.
    then we add 1 new element which is a js object with new fields etc.
  */



  const addUsersHandler = (usersName, usersAge) => {
      setUsersList((prevUsersListState) => {
          return [...prevUsersListState, {name: usersName, age: usersAge, id: Math.random().toString() }];
      })
  }

  return (
    <div>
        <AddUser onAddUsers={addUsersHandler} />
        <UsersList users={usersList} />
    </div>
  );
}

export default App;
