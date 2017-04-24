import requestGraphQL from './../utils/requestGraphQL'
let xhr;

export default function addNewContact(myId, newContactID) {
    return new Promise((resolve, reject) => {
        xhr ? xhr.abort() : false;
        let query = `
            query{
             makeFriends ( who:"${myId}", with:"${newContactID}" ) 
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