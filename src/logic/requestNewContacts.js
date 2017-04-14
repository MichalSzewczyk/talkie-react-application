import requestGraphQL from './../utils/requestGraphQL'

export default function requestNewContacts(searchInputValue) {
    return new Promise((resolve, reject) => {
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
        requestGraphQL(query)
            .then((response) => {
                console.log('response', response)
                resolve(response)
            })
            .catch(reject)
    })
}