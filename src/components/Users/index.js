import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function Users() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://raw.githubusercontent.com/Pompette/technical_test/master/users.json',
            );
            console.log('result', result.data)
            setData(result.data);
        };

        fetchData();
    }, []);

    return (
        <>
            { data.users &&
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Dev</th>
                        <th>Company</th>
                        <th>Years</th>
                        <th>Features</th>
                    </tr>
                    {
                        data.users.map(datum => (
                            <tr key={datum.id}>
                                <td>{datum.name}</td>
                                <td>{datum.age}</td>
                                <td>{datum.dev}</td>
                                <td>{datum.company}</td>
                                <td>{datum.years}</td>
                                <td>{datum.features.length}</td>
                            </tr>
                        ))
                    }
                </table>
            }
        </>
    );
}

export default Users;