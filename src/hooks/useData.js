import axios from "axios";
import React, { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://pim-messageprocessor.optum.com/api/GetPIMAuditData"
      );
      if (response) {
        setData(response.data);
      }
    }
    fetchData();
  }, []);

  return data || [];
};

export default useData;
