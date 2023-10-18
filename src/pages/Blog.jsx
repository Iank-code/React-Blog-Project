import React, { useState, useEffect } from "react";
import List from "./../components/blog/List";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

export default function Blog() {
  const [data, setData] = useState();
  const [newData, setNewData] = useState();
  useEffect(() => {
    fetch("https://project-react-charity-api.vercel.app/organizations")
      .then((response) => {
        if (!response.ok) {
          throw new Error(console.log("Failed to fetch organization"));
        }

        return response.json();
      })
      .then((data) => {
        // console.log(data.organization)
        setData(data.organization);
        setNewData(data.organization);
      });
  }, []);
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-5 gap-8 px-5">
        {newData &&
          newData.map((item, index) => {
            // console.log(item)
            return <List list={item} message="another prop" key={index} />;
          })}
      </div>

      <Footer />
    </div>
  );
}
