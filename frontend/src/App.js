import React, { useEffect, useState } from 'react';
import './App.css';
import UsersService from './services/UsersService';
import UserCard from './components/UserCard';
import CreateCard from './components/CreateCard';
import { Box } from '@material-ui/core';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const users = await UsersService.getUsers();
      setUsers(users);
    };

    getUsers();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users</h1>
      </header>
      <main>
        <Box display="flex" style={{ padding: 10 }}>
          {
            users.map(user =>
              <UserCard key={user.id} user={user} />
            )
          }
          <CreateCard />
        </Box>
      </main>
    </div>
  );
}

export default App;
