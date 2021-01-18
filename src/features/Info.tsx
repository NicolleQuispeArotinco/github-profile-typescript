import React from "react";

import styles from "../styles/Info.module.css";

import { Link } from "react-router-dom";

type Props = {
  query: string;
  user: {
    id: number;
    avatar_url: string;
    login: string;
    name:string;
  };
}

function Info({user, query}: Props){
  console.log(user)
  return(
    <div className={styles.container}>
      {query === "" ? (
        <h1>Search users</h1>
      ): (
        <div>
          {user.login ? (
            <li key={user.id} className={styles.userContent}>
              <div className={styles.userInfo}>
                <img src={user.avatar_url} alt={user.login} className={styles.profilePicture}/>
                {user.name ? user.name: ""} <span>@{user.login}</span> 
              </div>
              <button className={styles.viewButton}>
                <Link to={`/${user.login}`}>
                  View
                </Link>
              </button>
            </li>
          ) : 
            <h1>Not Found</h1>
          }
        </div>
      )}
    </div>
  );
}

export default Info;