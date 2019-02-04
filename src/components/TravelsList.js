import React from 'react'

export default class TravelsList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.travelData.map(travel =>(
              <li key={travel.name}>{travel.name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
