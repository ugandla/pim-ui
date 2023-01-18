import { Breadcrumb, Card, Col, Collapse, Divider, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import MedicationTable from "../components/MedicationTable";
import styles from "../css/pages/details.module.css";
import data from "../mock-data";

import { Descriptions } from "antd";
import StatusIcon from "../components/StausIcon";
import SupportDataTable from "../components/SupportDataTable";
const { Panel } = Collapse;
const DetailPage = ({ data }) => {
  const match = useMatch("/:id");
  const [details, setDetails] = useState(null);
  useEffect(() => {
    if (match.params.id) {
      setDetails(data.filter((item) => item.id == match.params.id)[0]);
    }
  }, [match.params.id]);
  console.log("data", data);
  console.log("match", match);
  console.log("detail", details);

  return (
    <div>
      {details && (
        <>
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/" className={styles.breadcrumb}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item className={styles.breadcrumb}>
              {match.params.id}
            </Breadcrumb.Item>
          </Breadcrumb>
          {/* <h1 className="text-center">
            Patient Inbasket Processor - Refill Protocol Analysis and
            Recommendations
          </h1> */}
          <div className={`${styles.detailsContainer}`}>
            <div>
              <div className="flex justify-between">
                <div className="flex align-center " style={{ gap: "6px" }}>
                  <h3>Patient Name :</h3>
                  <p className={styles.descDetail}>{details?.patientName}</p>
                </div>
                <div className="flex align-center" style={{ gap: "6px" }}>
                  <h3>Primary Care Provider :</h3>
                  <p className={styles.descDetail}>{details?.providerId}</p>
                </div>
              </div>
              <div className="flex justify-between mt-md">
                <div className="flex align-center" style={{ gap: "6px" }}>
                  <h3>Task Action :</h3>
                  <p className={styles.descDetail}>{details?.taskAction}</p>
                </div>
                <div className="flex align-center" style={{ gap: "6px" }}>
                  <h3>Task Id :</h3>
                  <p className={styles.descDetail}>{details?.taskId}</p>
                </div>
              </div>
            </div>
            <Divider />

            <Space direction="vertical" className="flex mt-xl">
              <h3 className={styles.descTitle}>Original Request Text :</h3>
              <Card>
                <p className={styles.descDetail}>{details?.description}</p>
              </Card>
            </Space>

            <Space direction="vertical" className="flex mt-xl">
              <div className="flex align-center mt-xl" style={{ gap: "6px" }}>
                <h3 className={styles.descTitle}>
                  Is This A Request for Med Refill ? :
                </h3>
                <p>
                  <StatusIcon data={details?.isMedicineRefill} />
                </p>
              </div>
              <MedicationTable data={details?.medicineEntities} />
            </Space>
            {/* <div className="flex align-center mt-md" style={{ gap: "6px" }}>
              <h3>Requested Medication Name:</h3>
              <p>
                {details.IsMedicineRefill
                  ? details.MedicineEntities[0].MedicineName
                  : "NA"}
              </p>
            </div>
            <div className="flex align-center mt-md" style={{ gap: "6px" }}>
              <h3>Requested Medication Class:</h3>
              <p>
                {details.IsMedicineRefill
                  ? details.MedicineEntities[0].MedicineCategory
                  : "NA"}
              </p>
            </div> */}

            {/* <div className="flex align-center mt-md" style={{ gap: "6px" }}>
              <h3>Most Recent Visit(s)</h3> <span>(Within 12 months):</span>
              <p>NA</p>
            </div>
            <div className="flex align-center mt-md" style={{ gap: "6px" }}>
              <h3>Most Recent Lab/Imaging Procedure(s)</h3>{" "}
              <span>(Within 12 months):</span>
              <p>NA</p>
            </div> */}
            <div className="mt-xl">
              <Space direction="vertical" className="flex">
                <h3 className={styles.descTitle}>Conclusion</h3>
                <Descriptions title="" bordered>
                  <Descriptions.Item
                    label="Status"
                    span={3}
                    labelStyle={{ fontWeight: "600" }}
                  >
                    <StatusIcon
                      data={
                        details?.medicineEntities[0]?.ruleActionOutput
                          ?.isRulesSucceeded
                      }
                    />
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Suggestions"
                    span={3}
                    labelStyle={{ fontWeight: "600" }}
                  >
                    {
                      details?.medicineEntities[0]?.ruleActionOutput
                        ?.suggestions
                    }
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Criteria Passed"
                    span={3}
                    labelStyle={{ fontWeight: "600" }}
                  >
                    {
                      details?.medicineEntities[0]?.ruleActionOutput
                        ?.criteriaPassed
                    }
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Criteria Failed"
                    span={3}
                    labelStyle={{ fontWeight: "600" }}
                  >
                    {
                      details?.medicineEntities[0]?.ruleActionOutput
                        ?.criteriaFailed
                    }
                  </Descriptions.Item>
                </Descriptions>
              </Space>
            </div>

            <Space direction="vertical" className="flex mt-xl">
              <h3 className={styles.descTitle}>Task Comments :</h3>
              <Card>
                <p className={styles.descDetail}>{details?.taskComment}</p>
              </Card>
            </Space>

            <Space direction="vertical" className="flex mt-xl">
              <h3 className={styles.descTitle}>Steps :</h3>
              <Card>
                <div className={`flex justify-around ${styles.stepsContainer}`}>
                  {details?.steps.map((step) => (
                    <div key={step.CurrentStep} className={`${styles.step}`}>
                      <span style={{ color: "green", fontWeight: "bolder" }}>
                        ✓
                      </span>{" "}
                      {step.currentStep}{" "}
                      {/* <span>
                      {moment(step?.TimeStamp).format("DD-MM-YYYY HH:MM A ")}
                    </span> */}
                    </div>
                  ))}
                </div>
              </Card>
            </Space>

            <div className="mt-xl">
              <Collapse defaultActiveKey={["1"]}>
                <Panel
                  header={<h3 className={styles.descTitle}>Additional Info</h3>}
                  key="1"
                >
                  <Space direction="vertical" size={"large"} className="flex">
                    <Row>
                      <Col xs={10} className={styles.addInfo}>
                        Age :{" "}
                        {
                          details?.medicineEntities[0]?.ruleActionOutput
                            ?.supportData?.age?.value
                        }
                      </Col>
                      <Col></Col>
                    </Row>

                    <SupportDataTable
                      title="Procedures"
                      data={
                        details?.medicineEntities[0]?.ruleActionOutput
                          ?.supportData?.procedures
                      }
                    />
                    <SupportDataTable
                      title="Encounters"
                      data={
                        details?.medicineEntities[0]?.ruleActionOutput
                          ?.supportData?.encounters
                      }
                    />
                  </Space>
                </Panel>
              </Collapse>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
