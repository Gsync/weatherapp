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
        const pressures = data.list.map(weather => weather.main.pressure);
        const humidities = data.list.map(weather => weather.main.humidity);
        console.log(data);
        return (
            <tr key={data.city.id}>
                <td>{name}</td>
                <td><Chart data={temps} color="red" unit="K" /></td>
                <td><Chart data={pressures} color="green" unit="hPa" /></td>
                <td><Chart data={humidities} color="blue" unit="%" /></td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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