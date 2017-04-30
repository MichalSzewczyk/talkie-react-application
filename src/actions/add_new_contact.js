import addNewContactRequest from './../logic/add_new_contact'
import fetchUserContactList from './fetch_user_contact_list'
import {
    ADD_NEW_FRIEND_REQUEST_FAILURE,
    ADD_NEW_FRIEND_REQUEST_STARTED,
    ADD_NEW_FRIEND_REQUEST_SUCCESS
} from './../ducks/contacts'
import _ from 'lodash'

export default function addNewContact(contactId) {
    return async (dispatch, getState) => {
        if (!contactId) {
            return;
        }
        const state = getState();
        const myId = state.account.id;

        dispatch(ADD_NEW_FRIEND_REQUEST_STARTED({contactId}));
        try {
            const data = await addNewContactRequest(myId, contactId);
            const success = _.get(data, 'makeFriends.success', false);
            dispatch(ADD_NEW_FRIEND_REQUEST_SUCCESS({success, contactId}));
            dispatch(fetchUserContactList());
        } catch (error) {
            dispatch(ADD_NEW_FRIEND_REQUEST_FAILURE({contactId}));
        }
    }
}