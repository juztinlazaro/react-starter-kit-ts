import * as React from 'react';

const Home = () => {
  const [status, setStatus] = React.useState(false);
  return (
    <div>
      <h1>Home</h1>

      {status ? 'true' : 'false'}

      <button onClick={() => setStatus(!status)}>something</button>
    </div>
  );
};

export default Home;
