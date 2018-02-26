import { FETCH_WEATHER } from "../actions";

export default function(state= [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]; //creates a copy of state with payload data
            //same as state.concat([action.payload.data])
    }
    return state;
}