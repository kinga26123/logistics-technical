import { useState } from "react";
import { Trace } from "../models/Trace";
import { ListItemTextContainer } from "./ListItemTextContainer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ActivityType } from "../models/ActivityType";

export const ActivityContainer: React.FC<{ traces: Trace[] }> = ({
  traces,
}) => {
  const [expanded, setExpanded] = useState(false);

  function sumActivityDuration(traces: Trace[], type?: ActivityType): number {
    var duration = 0;
    traces.map((trace) =>
      trace.activity.map((activity) => (!type || activity.type === type ? duration += activity.duration : {}))
    );
    return duration;
  }

  return (
    <div className="activity-box-container">
      <span className="activity-box-main">
        <ListItemTextContainer value={sumActivityDuration(traces) + " minutes"} />
        {expanded ? (
          <FaChevronUp className="chevron" onClick={() => setExpanded(false)} />
        ) : (
          <FaChevronDown
            className="chevron"
            onClick={() => setExpanded(true)}
          />
        )}
      </span>
      {expanded ? (
        <ul className="activity-box">
          <ListItemTextContainer value={`Rest - ${sumActivityDuration(traces, ActivityType.Rest)} minutes`} />
          <ListItemTextContainer value={`Available - ${sumActivityDuration(traces, ActivityType.Available)}  minutes`} />
          <ListItemTextContainer value={`Drive - ${sumActivityDuration(traces, ActivityType.Drive)}  minutes`} />
          <ListItemTextContainer value={`Work - ${sumActivityDuration(traces, ActivityType.Work)}  minutes`} />
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
