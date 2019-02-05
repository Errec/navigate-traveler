import React, { Component } from 'react'
import "../styles/PriceTag.sass";

export default class PriceTag extends Component {
  render() {
    console.log(this.props.productData);
    return (
      <div className="PriceTag">
        <div className={`PriceTag__ship PriceTag__ship--${this.props.productData.productClass.replace(/\s/g, "")}`}>
        </div>
        <p className="PriceTag__no-discount">{this.props.productData.prices[0].currencySymbol} {this.props.productData.prices[0].rrp}</p>
        {this.props.productData.prices[0].rrpWithDiscount < this.props.productData.prices[0].rrp && 
          <p>{this.props.productData.prices[0].currencySymbol} {this.props.productData.prices[0].rrpWithDiscount}</p>
        }
        <hr></hr>
        <p className={`PriceTag__status PriceTag__status--${this.props.productData.status.replace(/\s/g, "")}`}>{this.props.productData.status}</p>
      </div>
    );
  }
}
