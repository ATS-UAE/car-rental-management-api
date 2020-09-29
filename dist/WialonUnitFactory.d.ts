import { Authenticated } from "./Authenticated";
import { WialonUnit } from "./WialonUnit";
export declare class WialonUnitFactory extends Authenticated {
    getOne: (id: number) => Promise<WialonUnit>;
    getAll: () => Promise<WialonUnit[]>;
}
