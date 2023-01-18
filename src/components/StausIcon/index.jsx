import React from "react";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

const StatusIcon = ({ data }) => {
  return (
    <div>
      {data ? (
        <CheckCircleFilled style={{ fontSize: "20px", color: "green" }} />
      ) : (
        <CloseCircleFilled style={{ fontSize: "20px", color: "red" }} />
      )}
    </div>
  );
};

export default StatusIcon;
