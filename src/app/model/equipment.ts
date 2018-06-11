import {Property} from "./property";
import {Comments} from "./comment";

export class Equipment {
   id: number;
   uuid: string;
   type: string;
   toFix: boolean;
   properties: Property[];
   comments: Comments[];

}
