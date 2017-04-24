import requestGraphQL from './../utils/requestGraphQL'
let xhr;

export default function removeExistingContact(myId, oldFriendID) {
    return new Promise((resolve, reject) => {
        console.log('removeExistingContact', myId, oldFriendID)
        xhr ? xhr.abort() : false;
        let query = `
            query{
             removeFriends ( who:"${myId}", with:"${oldFriendID}" ) 
	            {
	                success
	            }
            }
        `;
        xhr = new XMLHttpRequest();
        requestGraphQL(query, xhr)
            .then((response) => {
                resolve(response)
            })
            .catch(reject)
    })
}