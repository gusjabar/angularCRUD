
export interface User {
    id: number;
    name: string;
    email: string;
    city: Address;
}
export interface Address {
    city: string;
}