import Building from "#/building.jpg";
import Image from "next/image";
import Link from "next/link";

export default function List() {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col items-center gap-y-2 px-10 min-h-screen">
        <p class="text-lg font-bold pb-5 text-white">Location</p>
        <Image
          src={Building}
          className="rounded-xl"
          alt="Jullajakkrapong Building"
        />
        <p>ห้องพัสดุ อบจ</p>
        <p>ห้อง 203 อาคารจุลจักรพงษ์ (เดินขึ้นบันไดทางโรงอาหารเท่านั้น)</p>
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
