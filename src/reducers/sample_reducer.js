import { SAMPLE_ACTION } from '../actions/action_types';

var defaultState = {
    text : ''
}

export default (state = defaultState, action) =>  {
    switch (action.type) {
        case SAMPLE_ACTION : 
            console.log('sample reducer was called and value is ' + action.payload);
            return action.payload;
        default : 
            return state;
    }
}