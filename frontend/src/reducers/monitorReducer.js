import { FETCH_MONITORS } from '../actions/types'
import { convertHeaders } from '../helpers/headers.js'

const initialState = {
    items: []
};

function calculateLatency(calls) {
    if(!calls || calls.length === 0) {
        return 0;
    }
    let total = 0;
    calls.forEach((item) => {
        total += item.latency;
    });
    return Math.round(((total / calls.length) + Number.EPSILON) * 100) / 100;
}

function determineStatus(calls) {
    if(!calls || calls.length === 0) {
        return 'Pending';
    }
    return calls[0].statusCode === 200 ? 'Up' : 'Down';
}

function calculateErrorRate(calls) {
    if(!calls || calls.length === 0) {
        return 'Calculating';
    }
    const successes = calls.filter((item) => item.statusCode === 200).length / calls.length;
    return (successes * 100) + '%';
}

function getLongerCall(calls) {
    if(!calls || calls.length === 0) {
        return 'Calculating';
    }
    return calls.map((item) => item.latency).sort()[calls.length - 1];
}

function getShortestCall(calls) {
    if(!calls || calls.length === 0) {
        return 'Calculating';
    }
    return calls.map((item) => item.latency).sort()[0];
}

function MonitorReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_MONITORS:
            const convertItems = [];

            action.payload.forEach((item) => {
                convertItems.push({
                    endpoint: item.endpoint,
                    status: determineStatus(item.calls),
                    latency: calculateLatency(item.calls),
                    high: getLongerCall(item.calls),
                    low: getShortestCall(item.calls),
                    rate: calculateErrorRate(item.calls),
                    environment: item.environment
                });
            });
            return {
                ...state,
                items: convertItems,
                headers: convertHeaders([
                   'endpoint', 'status', 'latency', 'high', 'low', 'rate'
                ])
            };
        default:
            return state;
    }
}

export default MonitorReducer;