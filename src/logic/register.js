import requestGraphQL from "./../utils/requestGraphQL";

export function requestRegister(login, password) {
	return new Promise((resolve, reject) => {
		let query = `
            query{
              login(login:"${login}", password:"${password}"){
                login
                password
              }
            }
        `;
		requestGraphQL(query)
			.then(resolve)
			.catch(reject)
	})
}