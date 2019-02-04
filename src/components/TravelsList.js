import React from 'react'

export default class TravelsList extends React.Component {
  render() {
    console.log(this.props.travelData)
    return <div>
        <ul>
          {
          this.props.travelData.travelsListData.map(travel =>(
              <li key={travel.date}>{travel.date}</li>
            ))
          }
        </ul>
      </div>;
  }
}
