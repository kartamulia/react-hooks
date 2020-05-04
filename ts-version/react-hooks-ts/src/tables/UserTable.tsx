import React from 'react'
import IUser from '../_models/user'

const UserTable: React.FC<{
    users: IUser[],
    editUser(user: IUser): void,
    deleteUser(id: number): void
}> = ({ users, editUser, deleteUser }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button type="button"
                                    className="button"
                                    onClick={() => editUser(user)}
                                >Edit</button>
                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="button muted-button"
                                >Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td>No users</td>
                        </tr>
                    )}
            </tbody>

        </table>
    )
}

export default UserTable
