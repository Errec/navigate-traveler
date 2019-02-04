import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTravels } from '../actions/travelsActions';

class TravelsList extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1> My Boat LIst </h1>
      </div>
    );
  }
}

TravelsList.propTypes = {
  fetchTravels: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.travelsData.travels
});

export default connect(mapStateToProps, { fetchTravels })(TravelsList);