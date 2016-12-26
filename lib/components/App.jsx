import React from 'react';
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

        <header id="header">
          <p id="title">Barrel Bash</p>
        </header>

        <main className="body">
          <RaceList
            barrelraces ={barrelraces}
          />
        </main>

        <footer id="footer">
        <Sort />
        <Filter />
        </footer>

      </div>
    );
  }
}



module.exports = App;
