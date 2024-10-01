import { DayOfWeek } from "../models/DayOfWeek";
import { Trace } from "../models/Trace";
import { Checkbox } from "./Checkbox";

export const CheckboxContainer: React.FC<{ traces: Trace[] }> = ({
  traces,
}) => {
  function isDayChecked(traces: Trace[], dayOfWeek: DayOfWeek): boolean {
    return (
      traces.find((trace) => {
        var date = new Date(trace.date);
        return date.getDay() === dayOfWeek;
      }) !== undefined
    );
  }

  return (
    <ul className="checkbox-container">
      {Object.values(DayOfWeek)
        .filter((dayOfWeek) => typeof dayOfWeek === "number")
        .map((key, dayOfWeek) => {
          return (
            <Checkbox value={isDayChecked(traces, dayOfWeek)} key={dayOfWeek} />
          );
        })}
    </ul>
  );
};
