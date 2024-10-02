import { useState } from "react";
import driverData from "../data/drivers.json";
import { Data } from "../models/Data";
import { CheckboxContainer } from "./CheckboxContainer";
import { ListHeader } from "./ListHeader";
import { ListItemTextContainer } from "./ListItemTextContainer";
import { SearchBar } from "./SearchBar";
import { ActivityContainer } from "./ActivityContainer";

const DriverList: React.FC = () => {
  const data = driverData.data as Data[];
  const [driverFilter, setDriverFilter] = useState("");

  function formatDriverName(driver: Data): string {
    return `${driver.forename} ${driver.surname}`;
  }

  return (
    <ul className="driver-list">
      <SearchBar
        value={driverFilter}
        onChangeFunction={(e) => setDriverFilter(e)}
      />
      <ListHeader />
      {data
        .slice()
        .filter((x) => {
          var driverName = formatDriverName(x).toLocaleLowerCase();
          var driverFilterLower = driverFilter.toLocaleLowerCase();
          return (
            driverFilterLower.length === 0 ||
            driverName.includes(driverFilterLower) ||
            driverFilterLower.includes(driverName)
          );
        })
        .map((driver) => {
          return (
            <li key={driver.driverID} className="driver-list-item">
              <ListItemTextContainer value={formatDriverName(driver)} />
              <ListItemTextContainer value={driver.vehicleRegistration} />
              <ActivityContainer
                traces={driver.traces}
              />
              <CheckboxContainer traces={driver.traces} />
            </li>
          );
        })}
    </ul>
  );
};

export default DriverList;
