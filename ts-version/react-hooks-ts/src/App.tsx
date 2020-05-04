import React, { useState, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import UserTable from './tables/UserTable';
import IUser from './_models/user';
import EditUserForm from './forms/EditUserForm';
import AddUserForm from './forms/AddUserForm';

function App() {

  // empty user
  const emptyUser: IUser = { id: 0, name: '', username: '' }

  // Data
  const usersData: IUser[] = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState<IUser>(emptyUser)
  const [editing, setEditing] = useState(false)

  const editUser = (user: IUser) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const cancelEditUser = () => {
    setEditing(false);
    setCurrentUser(emptyUser);
  }

  const updateUser = (id: number, updatedUser: IUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const addUser = (user: IUser) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id: number) => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className="container">
      <h1>CRUD APP with Hooks (Typescript)</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing == true ? (
            <Fragment>
              <h2>Edit User</h2>
              <EditUserForm
                user={currentUser}
                updateUser={updateUser}
                cancelEditUser={cancelEditUser} />
            </Fragment>
          ) : (
              <Fragment>
                <h2>Add New User</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editUser={editUser} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
