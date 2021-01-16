import React, {useState, useEffect} from "react";

import HeaderWithoutInput from "./HeaderWithoutSearch";

import styles from "../styles/User.module.css";

type Props = {
  match: {
    params: {
      login: string;
    }
  };
}

interface UserProps {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  company: string;
  location: string;
  twitter_username: string;
  blog: string;
}

function User(params: Props){
  let  username = params.match.params.login;
  const [user, setUser] = useState<Partial<UserProps>>({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );
      const data = await response.json();
      setUser(data);
    };
    if (params.match.params.login) {
      fetchUser();
    }
    fetchUser();
  }, [username]);

  console.log(username);
  
  return(
    <div>
      <HeaderWithoutInput/>
      {user && (
        <div className={styles.container}>
          <div className={styles.userInfo}>
            <div>
              <img src={user.avatar_url} alt={user.login} className={styles.profilePicture}/>
              <div className={styles.nameContainer}>
                {user.name ? (
                  <h1>{user.name}</h1>
                ): null}
                <p>@{user.login}</p>
              </div>
              {user.bio? 
                <p className={styles.bio}>{user.bio}</p>
              : null
              }
            </div>
            <ul className={styles.moreInfo}>
              <li>Followers: <span>{user.followers}</span></li>
              <li>Following: <span>{user.following}</span></li>
              <li>Company: {user.company ? <span>{user.company}</span> : ""}</li>
              <li>Location: {user.location ? <span>{user.location}</span> : ""}</li>
              <li>Twitter: {user.twitter_username ? <span>{user.twitter_username}</span>: ""}</li>
              <li>Blog: {user.blog ? <a href={user.blog}>{user.blog}</a>: ""}</li>
            </ul>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonRepositories}>View repositories</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default User;