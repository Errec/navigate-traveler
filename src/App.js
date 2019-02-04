import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { Provider } from "react-redux";
import moment from 'moment';
import store from "./store";
import { fetchTravels } from "./actions/travelsActions";
import TravelsList from "./components/TravelsList";
import Header from "./components/Header";

import "./styles/App.sass";
import "react-datepicker/dist/react-datepicker.css";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
 
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchTravels(moment(this.state.startDate).format("YYYY-MM-DD"));
  }

  handleChange(date) {
    this.setState(
      () => ({
        startDate: date
      }),
     () => {this.props.fetchTravels(moment(this.state.startDate).format("YYYY-MM-DD"))}
    );
  }

  render() {
    console.log();
    return <Provider store={store}>
        <div className="App">
          <Header></Header>
          <DatePicker
            minDate={new Date()}
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat="dd/MM/yyyy"
          />
        <TravelsList travelData={this.props.data} />
        </div>
      </Provider>;
  }
}

App.propTypes = {
  fetchTravels: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.travelsData.travels
});

export default connect(mapStateToProps, { fetchTravels })(App);