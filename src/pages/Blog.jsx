import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import List from "../components/blog/List";

export default function Blog() {
  const [data, setData] = useState();
  const [newData, setNewData] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch("https://charity-app-server.vercel.app/organizations")
      .then((res) => {
        if (!res.ok) {
          throw new Error(console.log("Network Error"));
        }
        return res.json();
      })
      .then((items) => {
        setNewData(items.organization);
        setData(items.organization);
      })
      .catch((err) => console.error(err.message));
  }, []);

  useEffect(() => {
    if (search != "") {
      let filteredData = data && data.filter((item) => {
        return (
          item.country.toLowerCase().includes(search) ||
          item.state.toLowerCase().includes(search) ||
          item.category.toLowerCase().includes(search) ||
          item.city.toLowerCase().includes(search)
        );
      });

      setNewData(filteredData);
    } else {
      setNewData(data);
    }
  }, [search]);
  return (
    <div>
      <Navbar />

      <div>
        <h1>PARTNERSHIP</h1>

        <input
        placeholder="Search"
          className="mt-4"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex">
          {newData &&
            newData.map((item, index) => {
              return <List list={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
