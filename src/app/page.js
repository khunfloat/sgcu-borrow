import SgcuLogo from "#/sgculogo.png";
import Itemcard from "@/app/components/Itemcard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <div className="flex flex-col items-center gap-y-2">
        <Image src={SgcuLogo} height={125} alt="Sdcu logo" />
        <p class="text-lg font-bold text-white">ระบบยืม-คืนพัสดุ อบจ</p>
      </div>

      {/* menu */}
      <div className="flex flex-col gap-y-2 pt-5">
        <div className="flex gap-2">
          <div className="bg-[#FCA758] p-2 rounded-full text-sm text-black text-center w-28">
            <Link href="/allstuff">พัสดุทั้งหมด</Link>
          </div>
          <div className="bg-[#C7EC96] p-2 rounded-full text-sm text-black text-center w-28">
            ยืมเลย!
          </div>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#BDDCE8] p-2 rounded-full text-sm text-black text-center w-28">
            ประวัติการยืม
          </div>
          <div className="bg-[#E3E3E3] p-2 rounded-full text-sm text-black text-center w-28">
            <Link href="/location">location</Link>
          </div>
        </div>
      </div>

      {/* frequnce */}
      <div className="flex flex-col items-center gap-y-2 pt-5 pb-5">
        <p class="text-lg font-semibold pb-3 text-white">รายการยืมบ่อย</p>

        <div className="flex gap-2">
          <Itemcard />
          <Itemcard />
        </div>
        <div className="flex gap-2">
          <Itemcard />
          <Itemcard />
        </div>
        <div className="flex gap-2">
          <Itemcard />
          <Itemcard />
        </div>
      </div>

      {/* footer */}
      <div className="bottom-0 sticky bg-white h-32 w-full rounded-tl-3xl rounded-tr-3xl px-5 pt-5">
        <div className="bg-[#C7EC96] h-10 text-black rounded-full flex justify-center items-center">
          <p>ยืมเลย</p>
        </div>
        <p className="text-center pt-3 text-xs text-gray-500">
          <Link href="/">Developed by Niccalodon</Link>
        </p>
      </div>
    </div>
  );
}
