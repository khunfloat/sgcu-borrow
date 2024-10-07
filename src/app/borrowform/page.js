"use client";

import Link from "next/link";
import { useState } from "react";

export default function BorrowForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Number Submitted:", phoneNumber);
    // Handle form submission logic (e.g., send to API)
    setPhoneNumber(""); // Clear form after submission
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Title */}
      <div className="flex flex-col items-center gap-y-3 pb-5">
        <p class="text-lg font-bold pb-5 text-white">รายการยืม</p>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit} className="rounded h-fit">
        <div className="mb-2 w-full">
          <label
            htmlFor="organization"
            className="block mb-2 text-xs text-white"
          >
            โครงการ/องค์กร/ชมรม/คณะ ฝ่าย
          </label>

          <input
            type="text"
            id="org"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 rounded-lg text-black pl-4"
            placeholder="ชื่อฝ่าย"
            required
          />

          <label
            htmlFor="organization"
            className="block mb-2 text-xs text-white"
          >
            รายการยืม
          </label>

          <input
            type="text"
            id="org"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 rounded-lg text-black pl-4"
            placeholder="ชื่อฝ่าย"
            required
          />
        </div>
        {/* <button
          type="submit"
          className="w-full p-2 bg-white text-black rounded"
        >
          <div className="flex items-center space-x-4 justify-center">
            <p className="flex justify-center">Login with</p>
            <Image
              src={Cunex}
              height={37}
              alt="Sdcu logo"
              className="items-center mx-auto rounded-md"
            />
          </div>
        </button> */}
      </form>

      {/* menu */}
      <div className="fixed bottom-0 bg-white h-32 w-full rounded-tl-3xl rounded-tr-3xl px-5 pt-5">
        <div className="bg-[#C7EC96] h-10 text-black rounded-full flex justify-center items-center">
          <p>ยืนยันการจอง</p>
        </div>
        <p className="text-center pt-3 text-xs text-gray-500 underline">
          <Link href="/">กลับไปหน้าหลัก</Link>
        </p>
      </div>
    </div>
  );
}
