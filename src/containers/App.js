import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/products/:productId/edit" component={Form} />
            <Route path="/products/create" component={Form} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;
