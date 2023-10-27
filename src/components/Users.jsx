import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    // useEffect(()=>{
    //     fetch('/')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //     })
    // },[])

    // useEffect(()=>{
    //     axios.get('/')
    //     .then(data =>{
    //         console.log(data.data);
    //     })
    // },[])

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
    return (
        <div>
            <h1>Users : {loadedUsers.length}</h1>
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
                            users.map(user => <tr key={user._id}>
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

export default Users;