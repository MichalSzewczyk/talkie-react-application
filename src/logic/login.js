import requestGraphQL from './../utils/requestGraphQL'

export function requestLogin(login, password) {
    return new Promise((resolve, reject) => {
        let query = `
            query{
              login(login:${login}, password:${password}){
                name
              }
            }
        `;
        requestGraphQL(query)
            .then(resolve)
            .catch(reject)
    })
}