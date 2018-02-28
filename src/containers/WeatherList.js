import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }
    renderWeather(data) {
        const name = data.city.name;
        const temps = data.list.map(weather => weather.main.temp);
        console.log(data);
        return (
            <tr key={data.city.id}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="red" />
                </td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     return { weather: state.weather };
// }
//es6 syntax same as above commented function
function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);