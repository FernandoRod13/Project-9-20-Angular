export class PaymentMethod {
    constructor (
        public id: number,
        public cardHolder: string,
        public cardNumber: string,
        public zipCode: string,
        public expirationDate: Date
    ) {}
}
