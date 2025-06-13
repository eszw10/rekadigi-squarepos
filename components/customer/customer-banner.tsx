import Image from "next/image";
import CustomerActions from "./customer-actions";
const CustomerBanner = () => {
  return (
    <div className="p-3 bg-iris-100 rounded-lg text-white relative overflow-hidden">
      <Image
        src={"/doteffect.png"}
        alt={"effect"}
        width={1192}
        height={167}
        className="absolute top-0 left-0 z-10"
      />
      <Image
        src={"/banner.png"}
        alt={"banner"}
        width={183}
        height={100}
        quality={100}
        className="absolute top-0 right-0 h-full w-1/2 object-cover"
      />
      <h3 className="font-bold text-xl">Customer</h3>
      <p className="text-xs max-w-[341px] mt-2 leading-[200%]">
        On this menu you will be able to create, edit, and also delete the
        customer. Also you can manage it easily.
      </p>
      <CustomerActions />
    </div>
  );
};

export default CustomerBanner;
