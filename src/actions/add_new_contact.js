import addNewContactRequest from './../logic/add_new_contact'

export default function addNewContact(contactId) {
    return (dispatch, getState) => {
        if (!contactId) {
            return;
        }
        const state = getState();
        const myId = state.account.id;
        console.log('ADD NEW CONTACT ACTION', contactId)
        addNewContactRequest(myId, contactId)
            .then((data) => {
                console.log('SOME DATA', data)
            })
    }
}