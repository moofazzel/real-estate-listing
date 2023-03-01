import { AiOutlinePlus } from "react-icons/Ai";

function MobileMenu({ menuItems }: { menuItems: JSX.Element[] }) {
  return (
    <>
      <div className="border-r-2 shadow-2xl h-full">
        <div className="bg-white py-2.5">
          <h4 className="text-lg font-bold text-center">Menu</h4>
        </div>
        <div className="bg-[#f7f7f7] flex flex-col h-[93vh] justify-between p-5 pb-8 overflow-y-auto">
          <div className=" flex flex-col [&>*]:pl-8 [&>*]:border-b-2 [&>*]:justify-between [&>*]:py-4 [&>*]:pr-5">
            {menuItems}
          </div>
          <button className="flex gap-1.5 justify-center items-center px-[30px] py-3 mb-4 md:mb-0 rounded-full text-white  bg-main hover:bg-red-600 transition-all duration-200">
            <AiOutlinePlus className=" text-xl " />
            <span className="text-sm font-bold">Submit Property</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
