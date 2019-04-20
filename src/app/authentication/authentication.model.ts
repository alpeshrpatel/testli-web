export class LoginModel {
    constructor(
        public email?: string,
        public pw?: string,
    ) { }
}

export class RegisterModel {
    constructor(
        public fname?: string,
        public lname?: string,
        public email?: string,
        public phone?: string,
        public pw?: string,
    ) { }
}
