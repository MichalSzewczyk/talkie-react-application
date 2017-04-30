import requestGraphQL from './../utils/requestGraphQL'

export default async function removeExistingContact(myId, oldFriendID) {
    let query = `
            query{
             removeFriends ( who:"${myId}", with:"${oldFriendID}" ) 
	            {
	                success
	            }
            }
        `;
    try {
        return requestGraphQL(query, new XMLHttpRequest());
    } catch (e) {
        return e;
    }
}