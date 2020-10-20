import {Dispatch} from "redux";
import {getUsers} from "../api/api";
import {Filter} from "../App";

export interface User {
    name: string,
    lastname: string,
    age: number,
    sex: string,
}

const initialState:{users: User[], filteredUsers: User[]} = {
    users: [],
    filteredUsers: [],
};

const SET_USERS = 'appReducer/SET_USERS';
const FILTER_USERS = 'appReducer/FILTER_USERS';


const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: action.payload,
                filteredUsers: action.payload
            }
        }
        case FILTER_USERS: {
            const filteredValues = state.users.filter((user:any) => {
                for (let key in action.payload){
                    if (action.payload.hasOwnProperty(key) && action.payload[key] !== ''){
                        let filter;
                        switch (key) {
                            case 'age': {
                                filter = user[key] !== +action.payload[key];
                                break;
                            }
                            case 'sex': {
                                filter = !(action.payload[key][user[key]]);
                                break;
                            }
                            default: {
                                filter = !(user[key]).toLowerCase().includes(action.payload[key].toLowerCase().trim());
                            }
                        }
                        if(filter){
                            return false;
                        }
                    }
                }
                return true;
            });

            if(action.payload.name || action.payload.lastname || action.payload.age || !action.payload.sex.m || !action.payload.sex.f) {
                state.filteredUsers = filteredValues;
            } else {
                state.filteredUsers = state.users;
            }

            return {
                ...state,
                filteredUsers: state.filteredUsers
            }
        }
        default: {
            return state;
        }
    }
};

const setUsers = (payload: []) => ({
    type: SET_USERS,
    payload,
});

export const filterUsers = (payload: Filter) => ({
    type: FILTER_USERS,
    payload,
});



export const getUsersAsyncAction = () => {
    return async (dispatch: Dispatch) => {
        try {
            const request = await getUsers();
            dispatch(setUsers(request))
        }
        catch (e) {
            console.log(e);
        }
    }
};


export default appReducer;
