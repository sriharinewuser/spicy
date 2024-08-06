import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
   const user ={
    name: 'sri oops',
   };

   const cart ={
    totalCount:10,
   };

   const logout = () => {
     //implement logout logic here
   };
    
   return (
   <header className={classes.header}>
     <div className={classes.container}>
      <Link to="/" className={classes.logo}>
      spicy!
      </Link>
      <nav>
        <ul>
          {user?(
            <li className={classes.menu_container}>
              <link to="/profile">{user.name}</link>
              <div className={classes.menu}>
                <link to="/profile">Profile</link>
                <link to="/orders">Orders</link>
                <a onClick={logout}>Logout</a>
              </div>
            </li>
          ) :(
            <link to="/login">Login</link>
          )}

          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              cart{cart.totalCount > 0 &&
              <span>{cart.totalCount}</span>}
            </Link>

          </li>
        </ul>
      </nav>
     </div>
   </header>
   );

};