import React, { useState, ChangeEvent, useEffect } from 'react'
import IUser from '../_models/user'

const EditUserForm: React.FC<{
    user: IUser,
    updateUser(id: number, user: IUser): void,
    cancelEditUser(): void
}> = ({ user, cancelEditUser, updateUser }) => {
    const [editingUser, setEditingUser] = useState<IUser>(user)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setEditingUser({ ...editingUser, [name]: value });
    }

    useEffect(() => {
        setEditingUser(user)
    }, [user, cancelEditUser])

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (!user.name || !user.username) return;
                updateUser(editingUser.id, editingUser);
            }} >
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={editingUser?.name}
                onChange={handleInputChange} />
            <label htmlFor="username">Uername</label>
            <input type="text" name="username" value={editingUser?.username}
                onChange={handleInputChange} />
            <button type="submit" className="button" >
                Update User
            </button>
            <button onClick={() => cancelEditUser()}
                className="button muted-button">
                Cancel Update
            </button>
        </form>
    )
}

export default EditUserForm
