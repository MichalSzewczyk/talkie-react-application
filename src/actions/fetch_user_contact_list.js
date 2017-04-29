import _ from 'lodash'
import {
    REQUEST_USER_CONTACT_LIST_STARTED,
    REQUEST_USER_CONTACT_LIST_SUCCESS,
    REQUEST_USER_CONTACT_LIST_FAIL,
} from './../ducks/contacts';
import fetchUserContactListRequest from './../logic/fetch_user_contact_list'

export default function fetchUserContactList() {
    return (dispatch, getState) => {
        const myId = _.get(getState(), 'account.id');
        dispatch(REQUEST_USER_CONTACT_LIST_STARTED());
        fetchUserContactListRequest(myId)
            .then((contactListData) => {
                const friendList = _.get(contactListData, 'myFriends.friends');
                dispatch(REQUEST_USER_CONTACT_LIST_SUCCESS(friendList));
            })
            .catch((error) => {
                console.error('ERROR', error);
                dispatch(REQUEST_USER_CONTACT_LIST_FAIL());
            });
    }
}