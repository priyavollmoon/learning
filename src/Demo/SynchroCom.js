import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SynchroCom = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ Username: '', Password: '' });
    const [users, setUsers] = useState([]);

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers(prev => [...prev, formData]);
        setFormData({ Username: '', Password: '' });

        setTimeout(() => {
            toast.success("Going to route asynchroCom");
            navigate('/asynchroCom');
        }, 2000);

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='Username'>Username</label>
                <input
                    name='Username'
                    type='text'
                    placeholder='Username'
                    value={formData.Username}
                    onChange={handleOnchange}
                />

                <label htmlFor='Password'>Password</label>
                <input
                    name='Password'
                    type='number'
                    placeholder='Password'
                    value={formData.Password}
                    onChange={handleOnchange}
                />

                <button type='submit'>Submit</button>
            </form>

            <ol>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.Username} -{user.Password}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default SynchroCom;
