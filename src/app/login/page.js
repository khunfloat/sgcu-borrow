"use client";

import Cunex from "#/cunex.png";
import Niccalodon from "#/niccalodon.png";
import SgcuLogo from "#/sgculogo.png";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Number Submitted:", phoneNumber);
    // Handle form submission logic (e.g., send to API)
    setPhoneNumber(""); // Clear form after submission
  };

  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <div className="flex flex-col items-center gap-y-2">
        <Image src={SgcuLogo} height={125} alt="Sdcu logo" />
        <p class="text-lg font-bold text-white">ระบบยืม-คืนพัสดุ อบจ</p>
      </div>

      {/* form */}

      <form onSubmit={handleSubmit} className="pt-20 rounded h-fit">
        <div className="mb-2 w-64">
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 rounded text-black pl-4"
            placeholder="Phone Number"
            required
          />
        </div>
        <button
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
        </button>
      </form>

      {/* footer */}
      <div className="fixed bottom-3">
        <p class="text-xs font-light text-white text-center pb-2">
          Developed by
        </p>
        <Image
          src={Niccalodon}
          height={40}
          alt="Sdcu logo"
          className="items-center mx-auto"
        />
        <p class="text-xl font-bold text-white text-center">NICCALODON</p>
      </div>
    </div>
  );
}
