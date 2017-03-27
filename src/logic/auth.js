import store from './../store'
import loginAction from './../actions/login';

const loginDataLocalStorageKey = 'userLoginData'
export default (nextState, transition, continueRouting) => {

    const state = store.getState()
    const dispatch = store.dispatch
    const localStorageData = loadLoggedFromLocalStorage()
    const {account} = state
    if (account.logged) {
        continueRouting()
        return
    }

    if (!account.logged && localStorageData) {
        tryToLoginWithLocalStorageData(localStorageData, dispatch)
            .then(() => {
                continueRouting()
            })
            .catch(() => {
                clearLoggedFromLocalStorage()
                transition('/');
                continueRouting()
            })
        return
    }

    transition('/')
    continueRouting()
}

function tryToLoginWithLocalStorageData(localStorageData, dispatch) {
    const {login, password} = localStorageData
    return new Promise((resolve, reject) => {
        dispatch(loginAction(login, password, false))
            .then(resolve)
            .catch(reject)
    })
}

// TODO: change password to token
export function saveUserCredentialsToLocalStorage(login, password) {
    localStorage && localStorage.setItem(loginDataLocalStorageKey, JSON.stringify({
        'login': login,
        'password': password
    }))
}
export function clearLoggedFromLocalStorage() {
    localStorage.clear()
}
function loadLoggedFromLocalStorage() {
    const data = localStorage.getItem(loginDataLocalStorageKey)
    return data ? JSON.parse(data) : null
}