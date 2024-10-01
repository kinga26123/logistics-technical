import { Trace } from "./Trace";

export interface Data {
  driverID: number;
  surname: string;
  forename: string;
  vehicleRegistration: string;
  traces: Trace[];
}
