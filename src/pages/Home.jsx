import { Avatar, Card, Space, Tag } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { colorArray } from "../constants/const";
import styles from "../css/pages/home.module.css";

const Home = ({ data }) => {
  const navigate = useNavigate();
  const redirectToDetail = (id) => {
    navigate(`${id}`);
  };

  return (
    <div>
      {data?.map(
        ({
          id,
          taskId,
          patientId,
          patientName,
          taskSub,
          description,
          taskComment,
          taskType,
          dateTime,
          providerId,
          steps,
          medicineEntities,
          isMedicineRefill,
        }) => (
          <Card
            className={`flex justify-between pointer ${styles.listItem}`}
            key={id}
            onClick={() => redirectToDetail(id)}
          >
            <Space direction="vertical" size={"middle"} className="flex">
              <h2 className={` ${styles.messageHeading}`}>{description}</h2>
              <div className={`flex  ${styles.greenBoxList}`}>
                {steps.map((step, ind) => (
                  <div key={step.CurrentStep}>
                    <Tag color={colorArray[ind % colorArray.length]}>
                      {step.currentStep}
                    </Tag>
                  </div>
                ))}
              </div>

              <Space className="flex align-center">
                <Avatar style={{ backgroundColor: "#f56a00" }}>
                  {patientName?.charAt(0)}
                </Avatar>
                <h3>{patientName}</h3>
              </Space>
            </Space>
          </Card>
        )
      )}
    </div>
  );
};

export default Home;
