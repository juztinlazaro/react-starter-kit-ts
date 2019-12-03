import * as React from "react";
import useFetch from "common/hooks/useFetch";
import useStatus from "./useStatus";

const Home = () => {
  const { status, setStatus } = useStatus(false);

  const { isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users/1",
  );

  return (
    <div>
      <h1>Home</h1>

      <p>{status ? "true" : "false"}</p>

      {status ? <span id="logout">logout</span> : <span id="login">login</span>}

      <button onClick={() => setStatus(!status)}>something</button>
    </div>
  );
};

export default Home;
