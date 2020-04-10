import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Agents from './pages/Agents';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/agents" component={Agents} exact />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
