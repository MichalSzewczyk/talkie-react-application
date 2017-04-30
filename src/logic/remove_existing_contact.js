import requestGraphQL from './../utils/requestGraphQL'

export default function removeExistingContact(myId, oldFriendID) {
    return new Promise((resolve, reject) => {
        console.log('removeExistingContact', myId, oldFriendID)
        let query = `
            query{
             removeFriends ( who:"${myId}", with:"${oldFriendID}" ) 
	            {
	                success
	            }
            }
        `;

        requestGraphQL(query, new XMLHttpRequest())
            .then((response) => {
                resolve(response)
            })
            .catch(reject)
    })
}