import * as React from 'react';
import useFetch from 'common/hooks/useFetch';

const Home = () => {
  const [status, setStatus] = React.useState(false);
  const { isLoading } = useFetch(
    'https://jsonplaceholder.typicode.com/users/1',
  );

  console.log(isLoading);

  return (
    <div>
      <h1>Home</h1>

      {status ? 'true' : 'false'}

      <button onClick={() => setStatus(!status)}>something</button>
    </div>
  );
};

export default Home;
