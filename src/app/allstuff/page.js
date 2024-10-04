import Itemcard from "@/app/components/Itemcard";
import Link from "next/link";
export default function List() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Title */}
      <div className="flex flex-col items-center gap-y-2 pb-5">
        <p class="text-lg font-bold pb-5 text-white">รายการพัสดุ</p>

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

      {/* menu */}
      <div className="bottom-0 sticky bg-white h-32 w-full rounded-tl-3xl rounded-tr-3xl px-5 pt-5">
        <div className="bg-[#C7EC96] h-10 text-black rounded-full flex justify-center items-center">
          <p>ยืมเลย</p>
        </div>
        <p className="text-center pt-3 text-xs text-gray-500 underline">
          <Link href="/">กลับไปหน้าหลัก</Link>
        </p>
      </div>
    </div>
  );
}
