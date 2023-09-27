
import StatsOverview from "./StatsOverview";
import AllCustomers from "./AllCustomers";
const Summary = () => {
    const allCustomersData = [
      {
        label: "Current Customers",
        value: 85,
        color: "#6028CD",
      },
      {
        label: "New Customers",
        value: 65,
        color: "#94D5C6",
      },
      {
        label: "Target Customers",
        value: 90,
        color: "#FF6B6B",
      },
      {
        label: "Retarget Customers",
        value: 30,
        color: "#FFD3D3",
      },
    ];
    return (
      <div className="flex gap-5 w-9/10 xl:w-3/4 mx-auto mt-8 ">
            <AllCustomers allCustomersData={allCustomersData} />
            <StatsOverview />
      </div>
    );
};

export default Summary;
