import { Plant } from "./plants"
interface cart {
    data : cartData [],
    loading : boolean,
    error : boolean,
    message : string
}
interface cartData {
    plant : Plant,
    quantity: number;
  }
export type {cart,cartData}