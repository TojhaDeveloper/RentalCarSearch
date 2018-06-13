import React, { Component } from 'react';
import './App.css';
import store from './store';
import Landing from './containers/Landing';
import Footer from './components/Layout/footer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarLists from './containers/CarLists';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/carLists" component={CarLists} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
