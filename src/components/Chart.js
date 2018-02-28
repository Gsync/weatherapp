import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function calAvg(arr) {
    const total = arr.reduce((a,b) => a+b);
    return Math.round(total / arr.length);
}

const Chart = props => (
    <div>
        <Sparklines height={120} width={180} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{calAvg(props.data)} {props.unit}</div>
    </div>
);

export default Chart;