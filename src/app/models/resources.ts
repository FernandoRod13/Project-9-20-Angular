export class Resource {
    constructor (
        public account_id: number,
        public available: number,
        public category: string,
        public city: string,
        public date_added: Date,
        public description: string,
        public last_update: Date,
        public name: string,
        public quantity: number,
        public price: number
    ){ }
}
