import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserTable from '../../components/tables/users'

function Users(props) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fecthUser = async () => {
      const result = await axios('/users');
      setUsers(result.data);      
    }

    fecthUser();
  }, []);

  return (
    <div>
      <h1 className="title">Users</h1>
      <UserTable userList={users} />
    </div>
  );
}

export default Users