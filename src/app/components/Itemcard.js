"use client";

import Image from "next/image";
import { useCart } from "react-use-cart";

export default function Itemcard({ item }) {
  const { addItem, inCart, removeItem } = useCart();

  item.price = 0;

  if (inCart(item.id)) {
    return (
      <div>
        <a onClick={() => removeItem(item.id)}>
          <div className="relative">
            <Image
              src={item.image_url}
              className="object-cover rounded-tl-lg rounded-tr-lg w-[128px] h-[130px] brightness-50"
              alt={item.name}
              width={0}
              height={0}
              unoptimized
            />
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
              In Cart
            </p>
          </div>
          <div className="bg-white pl-2 pb-2 pt-1 rounded-bl-lg rounded-br-lg">
            <p className="text-xs font-semibold text-black">{item.name}</p>
            <p className="text-[10px] text-gray-500">คงเหลือ {item.amount}</p>
          </div>
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <a onClick={() => addItem(item)}>
          <Image
            src={item.image_url}
            className="object-cover rounded-tl-lg rounded-tr-lg w-[128px] h-[130px]"
            alt={item.name}
            width={0}
            height={0}
            unoptimized
          />
          <div className="bg-white pl-2 pb-2 pt-1 rounded-bl-lg rounded-br-lg">
            <p className="text-xs font-semibold text-black">{item.name}</p>
            <p className="text-[10px] text-gray-500">คงเหลือ {item.amount}</p>
          </div>
        </a>
      </div>
    );
  }
}
