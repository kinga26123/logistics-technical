import { ActivityType } from "./ActivityType";

export interface Activity {
  startTime: string;
  type: ActivityType;
  duration: number;
}
