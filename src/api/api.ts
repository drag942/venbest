import axios from 'axios'


export const getUsers = () => {
    return axios.get('https://venbest-test.herokuapp.com/').then((response: { data: []; }) => response.data);
};