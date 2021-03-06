import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Agents from './pages/Agents';
import Agent from './pages/Agent';
import Weapons from './pages/Weapons';
import Weapon from './pages/Weapon';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/agents" component={Agents} exact />
          <Route path="/agents/:agent" component={Agent} exact />
          <Route path="/weapons" component={Weapons} exact />
          <Route path="/weapons/:weapon" component={Weapon} exact />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
