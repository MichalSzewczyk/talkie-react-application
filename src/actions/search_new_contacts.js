import {
    REQUEST_NEW_CONTACTS_FAILED,
    REQUEST_NEW_CONTACTS_STARTED,
    REQUEST_NEW_CONTACTS_FINISHED
} from "../ducks/contacts";
import requestNewContacts from "../logic/requestNewContacts";

export default function requestNewContactsOnSearch(searchValue) {
    return (dispatch) => {
        dispatch(REQUEST_NEW_CONTACTS_STARTED());
        requestNewContacts(searchValue).then((searchResult) => {
            dispatch(REQUEST_NEW_CONTACTS_FINISHED(searchResult));
        }).catch(() => {
            dispatch(REQUEST_NEW_CONTACTS_FAILED());
        })
    }
}