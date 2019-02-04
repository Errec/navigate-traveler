import React, { Component } from 'react'
import "../styles/PriceTag.sass";

export default class PriceTag extends Component {
  render() {
    console.log(this.props.productData);
    return (
      <div className="PriceTag">
        <p>{this.props.productData.productClass}</p>
        <p className="PriceTag__no-discount">{this.props.productData.prices[0].currencySymbol} {this.props.productData.prices[0].rrp}</p>
        {this.props.productData.prices[0].rrpWithDiscount < this.props.productData.prices[0].rrp && 
          <p>{this.props.productData.prices[0].currencySymbol} {this.props.productData.prices[0].rrpWithDiscount}</p>
        }
        <p>{this.props.productData.status}</p>
      </div>
    );
  }
}
