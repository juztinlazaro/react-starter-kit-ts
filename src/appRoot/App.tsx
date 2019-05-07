import * as React from 'react';
import './App.css';
import Router from './routes';
import Layout from 'components/Layout/Layout';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Router />
      </Layout>
    );
  }
}

export default App;
