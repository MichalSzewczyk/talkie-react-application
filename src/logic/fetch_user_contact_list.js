import requestGraphQL from './../utils/requestGraphQL'
let xhr;

export default async function fetchUserContactList(myId) {
    xhr ? xhr.abort() : false;
    let query = `
            query{ 
                myFriends(id:"${myId}"){                
            	    friends{
                       id
                       name
                       lastName
                       avatar
                       description
            }} 
}
        `;
    xhr = new XMLHttpRequest();
    try {
        return requestGraphQL(query, xhr);
    } catch (error) {
        return error;
    }
}