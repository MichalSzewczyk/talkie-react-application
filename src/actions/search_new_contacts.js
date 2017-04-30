import {
    REQUEST_NEW_CONTACTS_FAILED,
    REQUEST_NEW_CONTACTS_STARTED,
    REQUEST_NEW_CONTACTS_FINISHED
} from "../ducks/contacts";
import requestNewContacts from "../logic/requestNewContacts";

export default function requestNewContactsOnSearch(searchValue) {
    return async (dispatch) => {
        dispatch(REQUEST_NEW_CONTACTS_STARTED());
        try {
            const searchResult = await requestNewContacts(searchValue);
            console.log('searchResult', searchResult);
            dispatch(REQUEST_NEW_CONTACTS_FINISHED(searchResult));
        } catch (error) {
            dispatch(REQUEST_NEW_CONTACTS_FAILED());
        }
    }
}