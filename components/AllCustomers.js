"use client"; // don't forget this part if you use app dir to mark the whole
// file as client-side components

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function AllCustomers({ allCustomersData }) {
  return (
    <div className="flex flex-col bg-white p-2 pt-3 pb-6 rounded-3xl gap-2 drop-shadow-xl w-3/5">
      <h1 className="p-1 px-4 font-bold text-base font-poppins">
        All Customers
      </h1>
      <div className="flex w-full justify-between">
        {allCustomersData.map((data, index) => {
          const { label, value, color } = data;
          const options = {
            series: [value],
            options: {
              chart: {
                height: 120,
                type: "radialBar",
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 15,
                    size: "50%",
                  },
                  dataLabels: {
                    showOn: "always",
                    name: {
                      offsetY: 47,
                      show: true,
                      color: "#888",
                      fontSize: "11px",
                      fontWeight: "light",
                    },
                    value: {
                      offsetY: -5,
                      color: color,
                      fontSize: "16px",
                      show: true,
                    },
                  },
                },
              },
              labels: [label],
              colors: [color],
            },
          };
          return (
            <div key={index} className="w-1/4">
              <Chart
                options={options.options}
                series={options.series}
                type="radialBar"
                height={130}
                width={"100%"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
