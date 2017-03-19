import requestGraphQL from "./../utils/requestGraphQL";

export function requestRegister(login, name, lastName, password, avatar) {
	return new Promise((resolve, reject) => {
		let query = `
            query{
              register(login:"${login}", name: "${name}", lastName: "${name}", password:"${password}", avatar: "${avatar}"){
                success
                message
              }
            }
        `;
		requestGraphQL(query)
			.then(resolve)
			.catch(reject)
	})
}