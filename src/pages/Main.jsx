import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import DenseTable from "../components/DenseTable";

const Main = () => {
  const [data, setData] = useState(null);

  async function getData() {
    const res = await axios(API);
    setData(res.data);
  }
  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <h2>Loading data...</h2>;
  }

  return (
    <div className="container">
      <div className="list">
        {data.map((item, index) => (
          <DenseTable key={item.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Main;
