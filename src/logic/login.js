import requestGraphQL from './../utils/requestGraphQL'
let xhr;
export async function requestLogin(userLogin, userPassword) {
    xhr ? xhr.abort() : false;
    let query = `
            query{
              login(login:"${userLogin}", password:"${userPassword}"){
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
    const response = await requestGraphQL(query, xhr);
    const {login} = response;
    if (login.error === "true" || (login.message !== 'SUCCESS')) {
        throw 'Invalid credentials';
    }
    return login;
}