import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarLists extends Component {
  renderCar(carData) {
    return (
      <tr key={carData.ResultId}>
        <td>{carData.CarTypeCode}</td>
        <td>{`${carData.PickupAirport} ;${carData.PickupDay};${
          carData.PickupTime
        }`}</td>
        <td>{`Same as Pick Up Location ;${carData.DropoffDay};${
          carData.DropoffTime
        }`}</td>
        <td>{carData.RentalDays}</td>
        <td>{carData.TotalPrice}</td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Car Details</th>
            <th>PickUp Details</th>
            <th>DropOff Details</th>
            <th>Rental Days</th>
            <th>Total in USD</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cars.cars
            ? this.props.cars.cars.map(this.renderCar)
            : 'Loading'}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ cars }) => {
  return { cars };
};

export default connect(mapStateToProps)(CarLists);
