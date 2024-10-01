import driverData from "../data/drivers.json";
import { Data } from "../models/Data";
import { Trace } from "../models/Trace";
import { CheckboxContainer } from "./CheckboxContainer";
import { ListHeader } from "./ListHeader";
import { ListItemTextContainer } from "./ListItemTextContainer";

const DriverList: React.FC = () => {
  var data = driverData.data as Data[];

  function sumActivityDuration(traces: Trace[]): number {
    var duration = 0;
    traces.map((trace) =>
      trace.activity.map((activity) => (duration += activity.duration))
    );
    return duration;
  }

  function formatDriverName(driver: Data): string {
    return `${driver.forename} ${driver.surname}`;
  }

  return (
    <ul className="driver-list">
      <ListHeader />
      {data.map((driver) => {
        return (
          <li key={driver.driverID} className="driver-list-item">
            <ListItemTextContainer value={formatDriverName(driver)} />
            <ListItemTextContainer value={driver.vehicleRegistration} />
            <ListItemTextContainer value={sumActivityDuration(driver.traces)} />
            <CheckboxContainer traces={driver.traces} />
          </li>
        );
      })}
    </ul>
  );
};

export default DriverList;
