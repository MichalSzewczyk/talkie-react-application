import _ from 'lodash'
import {
    REQUEST_USER_CONTACT_LIST_STARTED,
    REQUEST_USER_CONTACT_LIST_SUCCESS,
    REQUEST_USER_CONTACT_LIST_FAIL,
} from './../ducks/contacts';
import fetchUserContactListRequest from './../logic/fetch_user_contact_list'

const debouncedAction = _.debounce(async (dispatch, getState) => {
    const myId = _.get(getState(), 'account.id');
    dispatch(REQUEST_USER_CONTACT_LIST_STARTED());
    try {
        const contactListData = await fetchUserContactListRequest(myId);
        const friendList = _.get(contactListData, 'myFriends.friends');
        dispatch(REQUEST_USER_CONTACT_LIST_SUCCESS(friendList));
    } catch (error) {
        dispatch(REQUEST_USER_CONTACT_LIST_FAIL());
    }
}, 1000);

export default function fetchUserContactList() {
    return (dispatch, getState) => {
        debouncedAction(dispatch, getState)
    }
}
