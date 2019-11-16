import * as React from "react";
import useFetch from "common/hooks/useFetch";
import useStatus from "./useStatus";

const Home = () => {
  const { status, setStatus } = useStatus(false);

  const { isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users/1",
  );

  console.log("isLoading", isLoading);

  return (
    <div>
      <h1>Home</h1>

      <p>{status ? "true" : "false"}</p>

      <button onClick={() => setStatus(!status)}>something</button>
    </div>
  );
};

export default Home;
