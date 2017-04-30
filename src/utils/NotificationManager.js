import Noty from 'noty'

class NotificationManager {
    showInfo(text) {
        new Noty({
            text,
            type: 'info',
            timeout: 1200,
            progressBar: true
        }).show();
    }

    error(text) {
        new Noty({
            text,
            type: 'error',
            timeout: 1200,
            progressBar: true
        }).show();
    }

    success(text) {
        new Noty({
            text,
            type: 'success',
            timeout: 1200,
            progressBar: true
        }).show();
    }
}

const instance = new NotificationManager();
export default instance;