export interface Actions<ACTION_TYPE> {
    [key: string]: (...props: any) => ActionReturn<ACTION_TYPE>;
}

export interface ActionReturn<ACTION_TYPE> {
    type: ACTION_TYPE;
    value: { [key: string]: any };
}

export interface ActionValues<ACTION_TYPE> {
    [key: string]: ActionReturn<ACTION_TYPE>;
}
