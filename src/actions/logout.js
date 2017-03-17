import {push} from 'react-router-redux';

export default function logoutAction() {
    return (dispatch) => {
        dispatch(push('/'));
        location.reload();
    }
}