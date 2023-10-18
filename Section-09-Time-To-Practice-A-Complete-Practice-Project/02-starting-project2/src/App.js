import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersLists, setUsersLists] = useState([]);

  function addUserHandler(uName, uAge) {
    setUsersLists((prevUsersLists) => {
      return [
        ...prevUsersLists,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersLists} />
    </div>
  );
}

export default App;
