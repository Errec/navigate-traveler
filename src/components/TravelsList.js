import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTravels } from '../actions/travelsActions';


class TravelsList extends Component {

  componentWillMount () {
    this.props.fetchTravels()
  }

  render() {
    return (
      <div>
        <h1> My Boat LIst </h1>
      </div>
    )
  }
}

TravelsList.propTypes = {
  fetchTravels: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.TravelsData.list
});

export default connect(mapStateToProps, { fetchTravels })(TravelsList);