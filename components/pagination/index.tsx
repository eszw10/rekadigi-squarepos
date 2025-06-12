import { ArrowRight } from "iconsax-reactjs";

const Pagination = () => {
  return (
    <div className="text-sm text-steel flex items-center">
      <div className="flex items-center">
        <div className="py-[6.5px] px-4 bg-white text-dark shadow-[2px_2px_4px_0px_#0000000D]">
          1
        </div>
        <div className="py-[6.5px] px-4 ">2</div>
        <div className="py-[6.5px] px-4">3</div>
        <div className="py-[6.5px] px-4">...</div>
        <div className="py-[6.5px] px-4">38</div>
      </div>
      <button className=" flex items-center py-2 px-4 gap-3">
        <span>Next</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
