import Noty from 'noty'

class NotificationManager {
    showInfo(text) {
        new Noty({
            text,
            type: 'info',
            timeout: 3000,
            progressBar: true
        }).show();
    }
}

const instance = new NotificationManager();
export default instance;