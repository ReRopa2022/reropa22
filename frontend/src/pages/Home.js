import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  //const [data, setData] = useState();

  //   useEffect(() => {
  //     axios({
  //       method: "GET",
  //       url: "http://localhost:5000/",
  //     }).then((res) => {
  //       console.log(res.data);
  //       setData(res.data.message);
  //     });
  //   });

  return (
    <div className="flex justify-center">
      <h2>Home</h2>
    </div>
  );
};

export default Home;
