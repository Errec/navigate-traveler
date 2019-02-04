import React from 'react';
import TravelCard from "./TravelCard";
import "../styles/TravelList.sass";
export default class TravelsList extends React.Component {
  render() {
    console.log(this.props.travelData)
    return (
      <div className="TravelList">
        <ul className="TravelList__list">
          {this.props.travelData.travelsListData.map(travel => (
            <li className="TravelList__item" key={travel.date}>
              <TravelCard travelData={travel} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
