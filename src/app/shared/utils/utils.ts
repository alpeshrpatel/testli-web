export class Utils {
    public static getCopyrightYear() {
        const startYear = 2019;
        const currentYear = new Date().getFullYear();
        if (startYear === currentYear) {
            return currentYear;
        } else {
            return startYear + '-' + currentYear;
        }
    }

    public static generateRandomPassword() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    public static isNumber(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    }
}
