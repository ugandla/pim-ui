import { Table } from "antd";
import React from "react";

const MedicationTable = ({ data, title }) => {
  const columns = [
    {
      title: "Medication Name",
      dataIndex: "medicineName",
      className: "capitalise",
      key: "MedicationName",
    },
    {
      title: "Medication Class",
      dataIndex: "medicineCategory",
      key: "Medication Class",
    },
  ];
  return (
    <Table columns={columns} bordered dataSource={data} pagination={false} />
  );
};

export default MedicationTable;
