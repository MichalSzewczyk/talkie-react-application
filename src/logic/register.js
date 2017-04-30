import requestGraphQL from "./../utils/requestGraphQL";
let xhr;
export async function requestRegister(login, name, lastName, password, avatar) {
    xhr ? xhr.abort() : false;
    let query = `
            query{
              register(login:"${login}", name: "${name}", lastName: "${name}", password:"${password}", avatar: "${avatar}"){
                error
                message
              }
            }
        `;
    xhr = new XMLHttpRequest();
    return await requestGraphQL(query, xhr)
}