import {State} from "./appReducer";

export type TState = {
    appReducer: State;
};

export const getFilteredUsersSelector = (state:TState) => {
    return state.appReducer.filteredUsers;
};
