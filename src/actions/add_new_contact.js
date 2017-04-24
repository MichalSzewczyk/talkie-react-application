import addNewContactRequest from './../logic/add_new_contact'
import {
    ADD_NEW_FRIEND_REQUEST_FAILURE,
    ADD_NEW_FRIEND_REQUEST_STARTED,
    ADD_NEW_FRIEND_REQUEST_SUCCESS
} from './../ducks/contacts'
import _ from 'lodash'

export default function addNewContact(contactId) {
    return (dispatch, getState) => {
        if (!contactId) {
            return;
        }
        const state = getState();
        const myId = state.account.id;

        dispatch(ADD_NEW_FRIEND_REQUEST_STARTED());

        addNewContactRequest(myId, contactId)
            .then((data) => {
                const success = _.get(data, 'makeFriends.success', false);
                dispatch(ADD_NEW_FRIEND_REQUEST_SUCCESS({success}));
            }).catch((e) => {
            dispatch(ADD_NEW_FRIEND_REQUEST_FAILURE(e));
        })
    }
}