"use client";

import SgcuLogo from "#/sgculogo.png";
import Cart from "@/app/components/Cart";
import Image from "next/image";
import Link from "next/link";
import { CartProvider } from "react-use-cart";
import Itemlist from "./components/Itemlist";

export default async function Home() {
  // const res = await fetch("http://localhost:8000/fitems"); // Replace with your API URL
  // const items = await res.json().items;

  // console.log(items);

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
        {/* Title */}
        <div className="flex flex-col items-center gap-y-2">
          <Image src={SgcuLogo} height={125} alt="Sdcu logo" />
          <p className="text-lg font-bold text-white">ระบบยืม-คืนพัสดุ อบจ</p>
        </div>

        {/* menu */}
        <div className="flex flex-col gap-y-2 pt-5">
          <div className="flex gap-2">
            <div className="bg-[#FCA758] p-2 rounded-full text-sm text-black text-center w-28">
              <Link href="/allstuff">พัสดุทั้งหมด</Link>
            </div>
            <div className="bg-[#C7EC96] p-2 rounded-full text-sm text-black text-center w-28">
              <Link href="/borrowform">ยืมเลย!</Link>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#BDDCE8] p-2 rounded-full text-sm text-black text-center w-28">
              <Link href="/login">ประวัติการยืม</Link>
            </div>
            <div className="bg-[#E3E3E3] p-2 rounded-full text-sm text-black text-center w-28">
              <Link href="/location">location</Link>
            </div>
          </div>
        </div>

        {/* frequnce */}
        {/* <div className="flex flex-col items-center gap-y-3 pt-5 pb-5">
         */}

        <p className="text-lg font-semibold text-white pt-5 pb-5">
          รายการยืมบ่อย
        </p>
        <Itemlist items={items} />

        {/* footer */}
        <div className="fixed bottom-0 bg-white h-32 w-full rounded-tl-3xl rounded-tr-3xl px-5 pt-5">
          <div className="bg-[#C7EC96] h-10 text-black rounded-full flex justify-center items-center">
            <p>ยืมเลย!</p>
          </div>
          <p className="text-center pt-3 text-xs text-gray-500">
            <Link href="/">Developed by Niccalodon</Link>
          </p>
        </div>
      </div>

      <Cart />
    </CartProvider>
  );
}
