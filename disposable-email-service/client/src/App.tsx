import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Inbox from './pages/Inbox';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/inbox" component={Inbox} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;