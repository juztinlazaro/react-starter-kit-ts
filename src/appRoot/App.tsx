import * as React from 'react';
import './App.css';
import Router from './routes';
import Layout from 'components/Layout/Layout';

class App extends React.Component {
  state = {
    isLoggedIn: false,
  };
  render() {
    const { isLoggedIn } = this.state;
    return (
      <Layout isLoggedIn={isLoggedIn}>
        <Router isLoggedIn={isLoggedIn} />
      </Layout>
    );
  }
}

export default App;
