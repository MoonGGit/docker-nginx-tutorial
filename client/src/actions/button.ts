import * as Interface from './ActionInterface';

export enum ACTION_TYPE {
    TEST1 = 'TEST1',
    TEST2 = 'TEST2',
}

export interface ActionValues extends Interface.ActionValues<ACTION_TYPE> {
    [ACTION_TYPE.TEST1]: {
        type: ACTION_TYPE.TEST1;
        value: { testValue1: string };
    };
    [ACTION_TYPE.TEST2]: {
        type: ACTION_TYPE.TEST2;
        value: { testValue2: string };
    };
}

export const actions: Interface.Actions<ACTION_TYPE> = {
    [ACTION_TYPE.TEST1]: (prop): ActionValues[ACTION_TYPE.TEST1] => ({
        type: ACTION_TYPE.TEST1,
        value: { testValue1: prop },
    }),
    [ACTION_TYPE.TEST2]: (prop): ActionValues[ACTION_TYPE.TEST2] => ({
        type: ACTION_TYPE.TEST2,
        value: { testValue2: prop },
    }),
};
