import React, { Component } from 'react'
import PriceTag from "./PriceTag";

export default class TravelCard extends Component {
  render() {
    return (
      <div className="TravelCard">
        <div className="TravelCard__head">
          <p>{this.props.travelData.date}</p>
          <p>{this.props.travelData.temperature}</p>
        </div>
        {this.props.travelData.products.map(product => (
          <PriceTag key={product.productClass} productData={product} />
        ))}
      </div>
    );
  }
}
