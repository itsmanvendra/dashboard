import Image from "next/image";
import { AiOutlineRise } from "react-icons/ai";
import { BsFillGrid3X2GapFill, BsGearFill } from "react-icons/bs";
const SideNavBar = () => {
  return (
    <div className="bg-white hidden lg:flex lg:flex-col lg:w-1/4 rounded-2xl drop-shadow-2xl p-4 items-center">
      <Image src="/logo.svg" alt="Zag Logo" width={76} height={18} />
      <div className="mt-8 w-full justify-center items-center">
        <div className="flex flex-row w-full px-4 py-4 items-center font-semibold text-base gap-3 hover:text-blue-500 hover:bg-blue-100 rounded-xl">
          <AiOutlineRise size={24} />
          Reports
        </div>
        <div className="flex flex-row w-full px-4 py-4 items-center text-base gap-3 hover:text-blue-500 hover:bg-blue-100 rounded-xl">
          <BsFillGrid3X2GapFill size={16} />
          Workspaces
        </div>
        <div className="flex flex-row w-full px-4 py-4 items-center text-base gap-3 hover:text-blue-500 hover:bg-blue-100 rounded-xl">
          <BsGearFill size={16} />
          Settings
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
