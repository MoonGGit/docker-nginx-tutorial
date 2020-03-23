import { ACTION_TYPE, ActionValues } from '../actions/button';

export interface ButtonStore {
    output?: string;
}

const button = (state: ButtonStore = {}, action: ActionValues[ACTION_TYPE]): ButtonStore => {
    switch (action.type) {
        case ACTION_TYPE.TEST1:
            console.log('action.type : ' + ACTION_TYPE.TEST1 + ' 리듀서 실행됨');
            return { ...state, output: action.value.testValue1 };
        case ACTION_TYPE.TEST2:
            console.log('action.type : ' + ACTION_TYPE.TEST2 + ' 리듀서 실행됨');
            return { ...state, output: action.value.testValue2 };
        default:
            return state;
    }
};

export default button;
