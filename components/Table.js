import React, { useMemo, useEffect, useState } from "react";
import data from "@/public/customerMockData.json";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useFilters,
} from "react-table";
import Pagination from "./Pagination";
import Filter from "./Filter";
const Table = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Customer Name",
        accessor: "name",
        maxWidth: 200,
        minWidth: 100,
        width: 150,
        Cell: ({ value }) => {
          return (
            <div
              className={`text-left text-sm text-black font-semibold font-openSans py-2 px-1`}
            >
              {value}
            </div>
          );
        },
      },
      {
        Header: "Company",
        accessor: "company_name",
        maxWidth: 200,
        minWidth: 100,
        width: 100,
        Cell: ({ value }) => {
          return (
            <div className="text-left text-sm text-black font-semibold font-openSans py-2 px-1">
              {value}
            </div>
          );
        },
      },
      {
        Header: "Phone Number",
        accessor: "phone_number",
        maxWidth: 200,
        minWidth: 100,
        width: 150,
        Cell: ({ value }) => {
          return (
            <div className="text-left text-sm text-black font-semibold font-openSans py-2 px-1">
              {value}
            </div>
          );
        },
      },
      {
        Header: "Email",
        accessor: "email",
        maxWidth: 400,
        minWidth: 200,
        width: 200,
        Cell: ({ value }) => {
          return (
            <div className="text-start text-sm text-black font-semibold font-openSans break-words py-2 px-1">
              {value}
            </div>
          );
        },
      },
      {
        Header: "Country",
        accessor: "country",
        maxWidth: 200,
        minWidth: 100,
        width: 100,
        Cell: ({ value }) => {
          return (
            <div className="text-start text-sm text-black font-semibold font-openSans py-2 px-1">
              {value}
            </div>
          );
        },
      },
      {
        Header: "Status",
        accessor: "status",
        maxWidth: 200,
        minWidth: 100,
        width: 100,
        Cell: ({ value }) => {
          let styleCol = {};
          if (value === "active") {
            styleCol = {
              backgroundColor: "#A6E7D8",
              color: "#2DA186",
              border: "2px solid #2DA186",
            };
          } else if (value === "inactive") {
            styleCol = {
              backgroundColor: "#FFC5C5",
              color: "#EB4E4E",
              border: "2px solid #EB4E4E",
            };
          }
          return (
            <div
              className="text-center capitalize text-sm font-poppins rounded-lg font-semibold py-1 px-1"
              style={styleCol}
            >
              {value}
            </div>
          );
        },
      },
    ],
    []
    );
    
    const [filterInput, setFilterInput] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("all");
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups if your table have groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    page,
    nextPage,
    previousPage,
    setPageSize,
      state,
      gotoPage,
    pageCount,
    setGlobalFilter,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    usePagination
  );
    const { pageIndex, pageSize } = state;
    const handlePreviousPage = () => {
        previousPage();
    };
    const handleNextPage = () => {
        nextPage();
    }
    const handlePageChange = (pageNumber) => {
        gotoPage(pageNumber - 1)
    }

  useEffect(() => {
    setPageSize(6);
  }, []);
    
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setGlobalFilter(value);
        setFilterInput(value);
    }

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setFilter("status", value);
        setSelectedStatus(value);
    }

  return (
      <div className="bg-white rounded-3xl w-9/10 xl:w-3/4 mx-auto py-4 my-8 px-2">
          <Filter filterInput={filterInput} handleSearchChange={handleSearchChange} selectedStatus={selectedStatus} handleFilterChange={handleFilterChange} />
      <table
        {...getTableProps()}
        className="table-fixed w-full mx-auto p-2 mb-4"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps({
                    style: { minWidth: column.minWidth, width: column.width },
                  })}
                  className="border-b-2 p-2 text-base font-medium text-start text-gray-400 font-openSans"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b-2">
                {row.cells.map((cell) => {
                  return (
                      <td
                      {...cell.getCellProps({
                        style: {
                          minWidth: cell.column.minWidth,
                          width: cell.column.width,
                        },
                      })}
                      className="py-2"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        currentPage={pageIndex}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageChange={handlePageChange}
        totalPages={pageCount}
      />
    </div>
  );
};

export default Table;
