import requestGraphQL from './../utils/requestGraphQL'


export default function addNewContact(myId, newContactID) {
    return new Promise((resolve, reject) => {
        let query = `
            query{
             makeFriends ( who:"${myId}", with:"${newContactID}" ) 
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