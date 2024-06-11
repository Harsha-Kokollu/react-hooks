import React, { useContext } from 'react';
import AuthContext from './AuthProvider';

const UserInfo = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please login to view your information</p>
      )}
    </div>
  );
};

export default UserInfo;
