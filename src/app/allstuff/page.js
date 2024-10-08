"use client";

import Cart from "@/app/components/Cart";
import Itemlist from "@/app/components/Itemlist";
import Link from "next/link";
import { CartProvider } from "react-use-cart";
export default function List() {
  const items = [
    {
      id: 1,
      name: "Pencil",
      amount: 100,
      image_url:
        "https://media.allonline.7eleven.co.th/pdmain/357812_01_pencil_yoya.jpg",
    },
    {
      id: 2,
      name: "Marker",
      amount: 50,
      image_url:
        "https://image.makewebcdn.com/makeweb/m_1920x0/QCaGJLM49/1/%E0%B9%80%E0%B8%84%E0%B8%A1%E0%B8%B5%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87.jpg",
    },
    {
      id: 3,
      name: "Eraser",
      amount: 200,
      image_url:
        "https://down-th.img.susercontent.com/file/dd32d263b8ceb89f533682348594b66b",
    },
    {
      id: 4,
      name: "Ruler",
      amount: 75,
      image_url: "https://inwfile.com/s-ge/0x4m3q.jpg",
    },
    {
      id: 5,
      name: "Stapler",
      amount: 30,
      image_url:
        "https://www.bbblogr.com/wp-content/uploads/2016/02/Zenith-Plier-Stapler-520-25.jpg",
    },
    {
      id: 6,
      name: "Scissors",
      amount: 45,
      image_url:
        "https://down-th.img.susercontent.com/file/8d1527c9dd73a6b99d11fd2bcdabdf0f",
    },
  ];
  return (
    <CartProvider id="items">
      <div className="flex flex-col items-center">
        <Cart />

        {/* Title */}
        <p className="text-lg font-semibold pb-5 pt-5 text-white">
          รายการพัสดุ
        </p>
        <Itemlist items={items} />

        {/* menu */}
        <div className="fixed bottom-0 bg-white h-32 w-full rounded-tl-3xl rounded-tr-3xl px-5 pt-5">
          <div className="bg-[#C7EC96] h-10 text-black rounded-full flex justify-center items-center">
            <p>ยืมเลย</p>
          </div>
          <p className="text-center pt-3 text-xs text-gray-500 underline">
            <Link href="/">กลับไปหน้าหลัก</Link>
          </p>
        </div>
      </div>
    </CartProvider>
  );
}
