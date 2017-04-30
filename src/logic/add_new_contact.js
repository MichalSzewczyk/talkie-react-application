import requestGraphQL from './../utils/requestGraphQL'


export default async function addNewContact(myId, newContactID) {
    let query = `
            query{
             makeFriends ( who:"${myId}", with:"${newContactID}" ) 
	            {
	                success
	            }
            }
        `;
    try {
        return requestGraphQL(query, new XMLHttpRequest());
    } catch (error) {
        return error;
    }
}