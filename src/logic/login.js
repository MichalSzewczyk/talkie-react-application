import requestGraphQL from './../utils/requestGraphQL'

export function requestLogin(login, password) {
    return new Promise((resolve, reject) => {
        let query = `
            query{
              login(login:"${login}", password:"${password}"){
                login
                password
                success
              }
            }
        `;
        requestGraphQL(query)
            .then((response) => {
                const {login} = response
                if (login.success === "true") {
                    resolve(login)
                    return
                }
                throw new Error('User is not preset in database')

            })
            .catch(reject)
    })
}