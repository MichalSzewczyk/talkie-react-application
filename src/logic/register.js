import requestGraphQL from "./../utils/requestGraphQL";
let xhr;
export function requestRegister(login, name, lastName, password, avatar) {
    return new Promise((resolve, reject) => {
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
        requestGraphQL(query, xhr)
            .then(resolve)
            .catch(reject)
    })
}