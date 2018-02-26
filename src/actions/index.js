const OWM_API_KEY = "8c02092daf06e3b389e20bc135608c37";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + OWM_API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ca`;
    const request = fetch(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}