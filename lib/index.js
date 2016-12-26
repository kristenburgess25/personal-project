import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App.jsx';

import { BrowserRouter, Match, Miss } from 'react-router'

const Root = () => {
  return (
  <BrowserRouter>
    <div>
      <Match exactly pattern='/'
        component={App}/>
        <Match exactly pattern='/eventlist'
          component={RaceList} />
    </div>
  </BrowserRouter>
)
}

render (
  <Root />, document.querySelector('#root')
)
