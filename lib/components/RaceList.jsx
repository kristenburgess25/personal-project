import React from 'react';


class RaceList extends React.Component {
  constructor(){
    super();
  }
  render() {

  return (
    <ul id="racelist">
      {this.props.barrelraces.map(br =>
        <li key={br.key}>{}<span className="date">{br.name}  </span>
        </li>)}
    </ul>
    );
  }
}

module.exports = RaceList;
