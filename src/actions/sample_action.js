import { SAMPLE_ACTION } from './action_types';

export const sample_action = (text) => {
    console.log('sample action was called and value is ' + text);
    return {
        type : SAMPLE_ACTION,
        payload : {text}
    }
}