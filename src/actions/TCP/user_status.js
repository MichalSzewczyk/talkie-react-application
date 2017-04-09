export default (...args1) => {
    return (...args2) => {
        console.log('RECEIVED USERS STATUS', args1, args2)
    }
}