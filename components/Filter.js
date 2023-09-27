import React from "react";
import { BiSearch } from "react-icons/bi";
const Filter = ({
  handleSearchChange,
  filterInput,
  handleFilterChange,
  selectedStatus,
}) => {
  return (
    <div className="flex p-2 items-baseline gap-2">
      <p className="grow text-sm font-openSans px-1 text-slate-400">
        Active Members
      </p>
      <div className="flex bg-slate-100 p-2 rounded-lg items-center gap-1">
        <BiSearch size={20} />
        <input
          type="text"
          placeholder="Search"
          value={filterInput || ""}
          onChange={handleSearchChange}
          className="bg-slate-100"
        />
      </div>
      <div className="flex bg-slate-100 rounded-lg self-center items-center gap-1 p-2 ">
        <p className="text-sm font-openSans px-1 text-slate-400">Sort by:</p>
        <select
          className="bg-slate-100 font-semibold font-openSans"
          value={selectedStatus || ""}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
