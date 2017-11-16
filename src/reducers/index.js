import { combineReducers } from 'redux';

import sampleReducer from './sample_reducer';

const rootReducer = combineReducers({
    sample_data : sampleReducer
});

export default rootReducer;