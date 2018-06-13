import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { findCar } from '../actions/findcar';
import { withRouter } from 'react-router-dom';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dest: '',
      pickDate: moment(),
      dropDate: moment(),
      pickTime: moment(),
      dropTime: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      pickDate: value
    });
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange2(value) {
    this.setState({
      dropDate: value
    });
  }

  handleChange3(value) {
    this.setState({
      pickTime: value
    });
  }
  handleChange4(value) {
    this.setState({
      dropTime: value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const UserData = {
      dest: this.state.dest,
      startdate: this.state.pickDate.toDate().toLocaleDateString('en-US'),
      enddate: this.state.dropDate.toDate().toLocaleDateString('en-US'),
      pickuptime: this.state.pickTime.format('HH:mm'),
      dropofftime: this.state.dropTime.format('HH:mm')
    };
    this.props.findCar(UserData, this.props.history);
  }

  render() {
    return (
      <div className="landing">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-2 text-center text-white">
                Rent Cars Easily{' '}
              </h1>
              <p className="lead text-center text-white">
                Rent Cars By Location and Time
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter City"
                    name="dest"
                    value={this.state.dest}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label className="text-light">Pick Up Date:</label>
                  <br />
                  <DatePicker
                    selected={this.state.pickDate}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="text-light">Drop Off Date:</label>
                  <br />
                  <DatePicker
                    selected={this.state.dropDate}
                    onChange={this.handleChange2}
                  />
                  <br />
                  <label className="text-light">Pick Up Time:</label>
                  <br />
                  <DatePicker
                    selected={this.state.pickTime}
                    onChange={this.handleChange3}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="LT"
                    timeCaption="Time"
                  />
                  <br />
                  <label className="text-light">Drop Off Time:</label>
                  <br />

                  <DatePicker
                    selected={this.state.dropTime}
                    onChange={this.handleChange4}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="LT"
                    timeCaption="Time"
                  />
                </div>
                <input
                  type="submit"
                  value="Find Car"
                  className="btn btn-info btn-block mt-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { findCar })(withRouter(Landing));
