import requestGraphQL from './../utils/requestGraphQL'

export function requestLogin(login, password) {

    return new Promise((resolve, reject) => {
        let query = `
            query{
              login(login:"${login}", password:"${password}"){
                name
                lastName
                avatar
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
        requestGraphQL(query)
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