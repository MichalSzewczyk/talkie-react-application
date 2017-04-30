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
    return await requestGraphQL(query, new XMLHttpRequest());
}