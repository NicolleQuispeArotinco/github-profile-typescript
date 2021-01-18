import React, {useState, useEffect} from "react";

import Header from "./Header";
import Info from "./Info";

interface UserProps {
  id: number;
  avatar_url: string;
  login: string;
  name:string;
}

function Main(){
  const [query, setQuery] = useState<string>("");
  const [user, setUser] = useState<UserProps>({id: 0, avatar_url: "", login: "", name: ""});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://api.github.com/users/${query}`
      );
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [query]);
  
  return(
    <div>
      <Header query={query} setQuery={setQuery}/>
      <Info user={user} query={query}/>
    </div>
  )
}

export default Main;