export class Purchase {
    constructor(
        public purchase_id: number,
        public supplier_name: string,
        public supplier_id: number,
        public date: Date,
        public reosurce_id: number,
        public resource_name: string,
        public resource_description: string,
        public purchase_price: number,
        public quantity: number
    ) {}
}
