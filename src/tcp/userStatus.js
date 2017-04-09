let interval;
import FETCH_STATUS from './../actions/TCP/fetch_status'

const func = {
    start: () => {
        return (dispatch) => {
            func.stop();
            interval = setInterval(() => {
                dispatch(FETCH_STATUS())
            }, 15000)
        }
    },
    stop: () => {
        if (interval) {
            clearInterval(interval)
        }
    }
}

export default func;