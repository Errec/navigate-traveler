import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { fetchTravels } from "./actions/travelsActions";
import TravelsList from "./components/TravelsList";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/App.sass";
import "react-datepicker/dist/react-datepicker.css";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      isLoaded: false,
      travelData: []
    };
 
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      travelData: [{name: 'joe', number:'3'},{name: 'conan', number:'7'}]
    });

    this.props.fetchTravels("2019-02-01");
  }

  render() {
    console.log(this.props)
    return <Provider store={store}>
        <div className="App">
          <DatePicker
            minDate={new Date()}
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat="dd/MM/yyyy"
          />
          <TravelsList travelData={this.state.travelData} />
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