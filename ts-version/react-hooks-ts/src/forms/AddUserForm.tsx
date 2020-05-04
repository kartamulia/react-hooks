import React, { useState, ChangeEvent } from 'react'
import IUser from '../_models/user'

const AddUserForm: React.FC<{ addUser(user: IUser): void }> = ({ addUser }) => {
    const emptyUser: IUser = { id: 0, name: '', username: '' };
    const [user, setUser] = useState(emptyUser);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setUser({ ...user, [name]: value });
    }

    return (
        <form action="post"
            onSubmit={event => {
                event.preventDefault();
                if (!user.name || !user.username) return;
                addUser(user);
                setUser(emptyUser);
            }}
        >
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={user.name}
                onChange={handleInputChange} />
            <label htmlFor="username">Uername</label>
            <input type="text" name="username" value={user.username}
                onChange={handleInputChange} />
            <button type="submit">Add New User</button>
        </form>
    )
}

export default AddUserForm
