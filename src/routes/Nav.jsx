import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Nav = () => {

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const userStored = localStorage.getItem('user')
    console.log({ userStored })
    if (userStored) {
      setUser(JSON.parse(userStored))
    }
  }, [])

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <>
      <div className='nav'>
        <p>holla</p>
        {/* <Link className='logo-container' to='/'> */}
        <img src="" alt='TriviaLogo' className='trivia' />
        {/* </Link> */}
        <div className='nav-sesion-container'>
          {user ? (
            <p>{user.username}</p>
          ) : ("")}

          {user ? (
            <Link className='nav-link' to="/" onClick={handleSignOut}>
              Logout
            </Link>

          ) : (
            <Link className='nav-link sign-in' to='/login'>
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;