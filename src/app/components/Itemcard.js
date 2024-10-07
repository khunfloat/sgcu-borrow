import Image from "next/image";

const Itemcard = ({ name, amount, image_url }) => (
  <div>
    <Image
      src={image_url}
      className="object-cover rounded-tl-lg rounded-tr-lg w-[128px] h-[130px]"
      alt={name}
      width={0}
      height={0}
      unoptimized
    />
    <div className="bg-white pl-2 pb-2 pt-1 rounded-bl-lg rounded-br-lg">
      <p className="text-xs font-semibold text-black">{name}</p>
      <p className="text-[10px] text-gray-500">คงเหลือ {amount}</p>
    </div>
  </div>
);

export default Itemcard;
