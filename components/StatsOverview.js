
import ProgressBar from "./ProgressBar";
import data from "@/public/customerMockData.json";

const StatsOverview = () => {
  let activeCustomers = 0;
  let inactiveCustomers = 0;
  data.forEach((customer) => {
    if (customer.status === "active") {
      activeCustomers++;
    } else {
      inactiveCustomers++;
    }
  });
  activeCustomers = (activeCustomers / data.length) * 100;
  inactiveCustomers = (inactiveCustomers / data.length) * 100;
    const statsOverviewData = [
      {
        label: "Active",
        value: activeCustomers.toFixed(2),
        color: "#94D5C6",
      },
      {
        label: "Inactive",
        value: inactiveCustomers.toFixed(2),
        color: "#FF6B6B",
      },
    ];
  return (
    <div className=" flex flex-col w-2/5 bg-white font-poppins px-2 pt-3 pb-6 rounded-2xl drop-shadow-xl">
      <h1 className="p-1 px-4 font-bold text-base font-poppins">
        Stats Overview
      </h1>
          {statsOverviewData.map((data, index) => {
                const { label, value, color } = data;
                return (
                    <ProgressBar key={index} label={label} value={value} color={color} />
                );
           })}
    </div>
  );
};
export default StatsOverview;
