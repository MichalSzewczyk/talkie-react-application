import requestGraphQL from './../utils/requestGraphQL'
let xhr;
export default async function requestNewContacts(searchInputValue) {
    xhr ? xhr.abort() : false;
    let query = `
            query{
             search (
	                letters:"${searchInputValue}"
	                length:"${20}"
	            ) 
	            {
	            friends{
        	    id
                name
                lastName
                avatar
                description
        }
}
              }
            }
        `;
    xhr = new XMLHttpRequest();
    return await requestGraphQL(query, xhr);
}