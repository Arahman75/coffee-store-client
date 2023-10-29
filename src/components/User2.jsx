import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const User2 = () => {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    //         .then(data =>
    //             setUsers(data))
    // }, [])

    const { isPending, isError, error, data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user');
            return res.json()
        }
    })

    const handleDelete = (id) => {
        // console.log(id);
        fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted data successfully')
                    const remainingUser = users.filter(user => user._id !== id);
                    setUsers(remainingUser)
                }
            })
    }

    if (isPending) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (isError) {
        return <span>{error.message}</span>
    }

    return (
        <div>
            {/* <h1>Users : {loadedUsers.length}</h1> */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>lastSignInTime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button className='btn' onClick={() => handleDelete(user._id)}>X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User2;