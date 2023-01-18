import { Table } from "antd";
import moment from "moment/moment";
import React from "react";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import StatusIcon from "../StausIcon";

const SupportDataTable = ({ data, title }) => {
  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      width: "30%",
    },
    {
      title: "Date",
      dataIndex: "datetime",
      key: "date",
      width: "30%",
      render: (data) => (
        <span>
          {moment(data).isValid() ? moment(data).format("DD-MM-YYYY") : data}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: "30%",
      render: (data) => (
        <span>
          <StatusIcon data={data} />
        </span>
      ),
    },
  ];
  return (
    <Table
      title={() => <h3>{title}</h3>}
      columns={columns}
      bordered
      dataSource={data}
      pagination={false}
    />
  );
};

export default SupportDataTable;
