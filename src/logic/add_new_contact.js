import requestGraphQL from './../utils/requestGraphQL'
let xhr;
export default function addNewContact(searchInputValue) {
    return new Promise((resolve, reject) => {
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
        requestGraphQL(query, xhr)
            .then((response) => {
                resolve(response)
            })
            .catch(reject)
    })
}