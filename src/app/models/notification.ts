export class Notification {
    constructor (
        public title: string,
        public message: string,
        public category: string,
        public resource_id: number,
        public name: string,
        public date: Date
    ) { }
}
