import { Json } from "../interfaces/database.types";

export type ProductType = {
    aditional: Json[] | null;
    category: string[];
    color: string[];
    context: string;
    description: string | null;
    id: number;
    image: string[];
    manual: string | null;
    name: string;
    price: number | null;
};
