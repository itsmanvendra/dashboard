const ProgressBar = ({ label, value, color }) => {
    const myProgressBarStyle = {
        width: `${value}%`,
        backgroundColor: `${color}`,
    };
  return (
    <div className="w-full flex flex-col items-center py-2">
      <p className="text-xs w-5/6 text-left text-[#94D5C6] pb-1">{label}</p>
      <div className="w-5/6 h-2 bg-gray-100 rounded-3xl">
        <div className="h-full rounded-3xl" style={myProgressBarStyle}></div>
      </div>
      <p className="text-xs w-5/6 text-right text-[#94D5C6] pt-1">{value}%</p>
    </div>
  );
};

export default ProgressBar;
