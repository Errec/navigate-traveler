import React, { Component } from 'react'
import PriceTag from "./PriceTag";
import "../styles/TravelCard.sass"

export default class TravelCard extends Component {
  render() {
    return (
      <div className="TravelCard">
        <div className="TravelCard__head">
          <div className="TravelCard__date">
            <p>Date: {this.props.travelData.date.substring(5, this.props.travelData.date.length)}</p>
          </div>
          <div className="TravelCard__temperature">
            <p>{this.props.travelData.temperature}</p>
          </div>
        </div>
        {this.props.travelData.products.map(product => (
          <PriceTag key={product.productClass} productData={product} />
        ))}
      </div>
    );
  }
}
