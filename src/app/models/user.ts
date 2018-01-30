export class User {
    constructor (
        public uid: number,
        public first_name: string,
        public last_name: string,
        public email: string,
        public city: string,
        public phone: string,
        public type: string
    ) { }
}
