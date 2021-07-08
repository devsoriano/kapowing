import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Checkout from './pages/Checkout/index';
import BookYourFlights from './pages/BookYourFlights/index';
import { Footer } from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/book-your-flights" component={BookYourFlights} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default connect()(App);
