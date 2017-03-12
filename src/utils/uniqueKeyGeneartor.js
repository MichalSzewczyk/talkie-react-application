/**
 * Used to genearte global unique message ID for displaying messaged
 */
export default (() => {
    let lastKey = -1;
    return () => {
        return lastKey++
    }
})()