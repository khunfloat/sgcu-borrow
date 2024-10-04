import Stapler from "#/stapler.jpg";
import Image from "next/image";

const Itemcard = () => (
  <div>
    <Image
      src={Stapler}
      className="w-32 h-28 object-fill rounded-tl-lg rounded-tr-lg"
      alt="Sdcu logo"
    />
    <div className="bg-white pl-2 pb-2 pt-1 rounded-bl-lg rounded-br-lg">
      <p className="text-xs font-semibold text-black">Stapler</p>
      <p className="text-[10px] text-gray-500">คงเหลือ 10 ตัว</p>
    </div>
  </div>
);

export default Itemcard;
