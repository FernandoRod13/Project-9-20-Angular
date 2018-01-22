export class ResourceAvaliable {
    constructor (
        public resource_id: number,
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
    ) { }
}
export class ResourceRequested {
    constructor (
        public resource_id: number,
        public account_id: number,
        public category: string,
        public city: string,
        public description: string,
        public requested_date: Date,
        public name: string,
        public quantity: number
    ) { }
}
