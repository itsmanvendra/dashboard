"use client";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import Summary from "./Summary";
import Table from "./Table";
const Main = () => {
  return (
    <div className="p-6">
      <div className="flex pt-2 px-4 pb-4 mb-4 border-solid border-b-2">
        <h1 className="text-xl font-bold grow">Orders</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg flex items-center gap-1">
          <FaPlus size={16} />
          Add New
        </button>
      </div>
          <Summary />
          <Table />
    </div>
  );
};

export default Main;
