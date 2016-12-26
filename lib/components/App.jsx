import React, { Component } from 'react';
import firebase, { reference, signIn, signOut} from '../firebase';
import { pick, map, extend } from 'lodash';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      barrelraces: [],
    };
  }

    componentDidMount() {
      reference.limitToLast(100).on('value', (snapshot) => {
        const barrelraces = snapshot.val() || {};
        this.setState({
          barrelraces: map(barrelraces, (val, key) => extend(val, { key }))
        });
      });
    }

  render() {
    const { barrelraces } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>BarrelBash</h2>
        </div>
        <main className="body">
          <p> just testing </p>
        </main>
        <footer id="footer">
        </footer>
      </div>
    );
  }
}

module.exports = App;
