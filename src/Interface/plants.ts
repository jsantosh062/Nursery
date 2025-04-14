interface plants {
    data : Plant [],
    loading : boolean,
    error : boolean,
    message : string
}
interface Plant {
    id: number;
    name: string;
    image: string;
    quantity: number;
    description: string;
  }
export type {plants,Plant}