import React from 'react';

function UserList() {
  const users = ['James', 'Nora', 'Matthew', 'Joe', 'Susan'];
  
  function deleteUserWithName(index) {
    delete users[index];
    console.log(users)
  }
  
  return (
    <ul>
      {users.map((name, index) => (

        <li>
          <button onClick={() => deleteUserWithName(index)}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;