import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { login, logout } from '../features/auth/authSlice';

const AuthStatus: React.FC = () => {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth) ;
  const dispatch = useAppDispatch();
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user?.name}</p>
          <button onClick={() => dispatch(logout())}>Log Out</button>
        </div>
      ) : (
          <div>
            <p>You are not Logged In...</p>
            <button onClick={() => dispatch(login({ id: "1", name: "John" }))}>Login</button>
        </div>
      )}
    </div>
  )
}

export default AuthStatus;