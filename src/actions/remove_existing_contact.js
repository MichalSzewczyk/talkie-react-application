import removeExistingContactRequest from './../logic/remove_existing_contact'
import {
    REMOVE_EXISTING_FRIEND__STARTED,
    REMOVE_EXISTING_REQUEST_FAILURE,
    REMOVE_EXISTING_REQUEST_SUCCESS,
} from './../ducks/contacts'
import fetchUserContactList from './fetch_user_contact_list'

export default function addNewContact(contactId) {
    return async (dispatch, getState) => {
        if (!contactId) {
            return;
        }
        const state = getState();
        const myId = state.account.id;

        dispatch(REMOVE_EXISTING_FRIEND__STARTED({contactId}));
        try {
            await removeExistingContactRequest(myId, contactId);
            dispatch(REMOVE_EXISTING_REQUEST_SUCCESS({contactId}));
            dispatch(fetchUserContactList());
        } catch (error) {
            dispatch(REMOVE_EXISTING_REQUEST_FAILURE({contactId}));
        }
    }
}