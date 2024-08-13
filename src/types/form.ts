import { MapsType } from "./maps";
import { ModesType } from "./modes";

export type FormType = {
  hostname: string;
  players: number;
  map: MapsType;
  mode: ModesType;
};
