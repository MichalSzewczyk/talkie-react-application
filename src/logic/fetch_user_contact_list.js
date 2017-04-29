import requestGraphQL from './../utils/requestGraphQL'
let xhr;

export default function fetchUserContactList(myId) {
    return new Promise((resolve, reject) => {
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
        requestGraphQL(query, xhr)
            .then((response) => {
                resolve(response)
            })
            .catch(reject)
    })
}