import React, { useState, useEffect } from "react";
import List from "./../components/blog/List";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

export default function Blog() {
  const [data, setData] = useState();
  const [newData, setNewData] = useState();
  const [search, setSearch] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const categoryList = data && data.map((org) => org.category);
  const newCategory = new Set(categoryList);
  const newSetCategory = [...newCategory];

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

  useEffect(() => {
    if (search != "") {
      let filteredData =
        data &&
        data.filter((item) => {
          return (
            item.country.toLowerCase().includes(search) ||
            item.name.toLowerCase().includes(search) ||
            item.category.toLowerCase().includes(search)
          );
        });

      setNewData(filteredData);
    } else {
      setNewData(data);
    }
  }, [search]);

  useEffect(() => {
    if (selectedCategory === null || selectedCategory === "") {
      return setNewData(data);
    }

    const filteredCategory =
      data && data.filter((item) => item.category === selectedCategory);
    setNewData(filteredCategory);
  }, [selectedCategory]);
  return (
    <div>
      <Navbar />

      <div>
        {/* For filtering using category */}
        <select onChange={(event) => setSelectedCategory(event.target.value)}>
          <option value={""}>All Categories</option>
          {newSetCategory &&
            newSetCategory.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
        </select>

        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search here..."
          className="mt-4 border-2 outline-none border-black w-52 rounded-lg px-4 py-2"
        />
      </div>

      <div className="grid grid-cols-5 gap-8 px-5">
        {newData &&
          newData.map((item, index) => {
            return <List list={item} message="another prop" key={index} />;
          })}
      </div>

      <Footer />
    </div>
  );
}
