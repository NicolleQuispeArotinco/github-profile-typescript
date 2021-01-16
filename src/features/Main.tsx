import React, {useState, useEffect} from "react";

import Header from "./Header";
import Info from "./Info";

function Main(){
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://api.github.com/users`
      );
      const data = await response.json();
      const usersBy = data.filter((user: {login:string}) => user.login.toLowerCase().includes(query))
      setUsers(usersBy);
    };
    fetchUsers();
  }, [query]);
  
  return(
    <div>
      <Header query={query} setQuery={setQuery}/>
      <Info users={users} query={query}/>
    </div>
  )
}

export default Main;