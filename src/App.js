import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Async from './components/Async';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/foo">Foo</Link></li>
        <li><Link to="/bar">Bar</Link></li>
      </ul>

      <Route exact path="/" component={() => <Async import={() => import('./components/Home')} />} />
      <Route path="/foo" component={() => <Async import={() => import('./components/Foo')} />} />
      <Route path="/bar" component={() => <Async import={() => import('./components/Bar')} />} />
    </div>
  </Router>
);

export default App;
