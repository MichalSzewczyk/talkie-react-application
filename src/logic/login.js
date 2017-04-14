import requestGraphQL from './../utils/requestGraphQL'
let xhr;
export function requestLogin(login, password) {
    return new Promise((resolve, reject) => {
        xhr ? xhr.abort() : false;
        let query = `
            query{
              login(login:"${login}", password:"${password}"){
                name
                lastName
                avatar
                id
                friends{
                    id
                    name
                    lastName
                    avatar
                    description
                }
                error
                message
              }
            }
        `;
        xhr = new XMLHttpRequest();
        requestGraphQL(query, xhr)
            .then((response) => {
                const {login} = response;
                if (login.error === "true") {
                    throw new Error('User is not preset in database')
                    return
                }
                resolve(login)
            })
            .catch(reject)
    })
}