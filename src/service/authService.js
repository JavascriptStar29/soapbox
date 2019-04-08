import storage from './storage'

class AuthService {
    constructor() {

    }

    isUserAuthenticated() {
        if (typeof window !== 'undefined') {
            // We are in the browser
            var token = this.getAuthToken();
            if (token) {
                return true;
            }
        }
        return false;
    }

    cleanAuthData() {
        storage.deleteAuthData();
    }

    getAuthToken() {

        if (!localStorage) {
            console.log("LocalStorage has not been initialised...");
            return null;
        }
        if (storage.getExpireDate()) {
            if (Date.now() > parseInt(storage.getExpireDate())) {
                console.log("User session has been expired...");
                this.cleanAuthData(); // localStorage.removeItem("authData");
                return null;
            }
        } else {
            return null;
        }

        return storage.getToken();
    }

    setAuthData(token) {
        var expireDate = Date.now() + 2 * 3600 * 1000;
        storage.saveToken(token);
        storage.setExpireDate(expireDate);
    }

}

const authService = new AuthService();

export default authService;