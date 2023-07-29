import Layout from "@/components/layouts/Layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <div className="w-[1920px] h-[2950px] relative bg-neutral-700">
      <img className="w-[1920px] h-[806px] left-0 top-0 absolute" src="about_banner.png" />
      <div className="w-[730px] h-[198px] left-[595px] top-[199px] absolute opacity-60 bg-neutral-500 rounded-[38px]" />
      <div className="left-[635px] top-[195px] absolute text-center">
        <span className="text-white text-5xl font-bold leading-[95px]">เลือกพ่วงข้างทำไมต้อง<br/></span>
        <span className="text-rose-500 text-8xl font-bold leading-[95px]">พ่วงข้างลานทอง</span>
      </div>
      <div className="w-[216px] h-16 left-[852px] top-[461px] absolute bg-slate-100 rounded-[32px]">
        <div className="w-[152px] left-[32px] top-[12px] absolute text-center text-slate-500 text-4xl font-bold leading-10">Button</div>
        <div className="w-px h-px left-[108px] top-[32px] absolute" />
      </div>
      <div className="w-[1920px] h-[998px] left-0 top-[806px] absolute">
        <div className="w-[1920px] h-[1003px] left-0 top-0 absolute bg-white"/>
        <div className="w-[1920px] h-[174px] left-0 top-[-2px] absolute bg-red-700" />
        <div className="w-[389px] left-[765px] top-[58px] absolute text-center text-white text-4xl font-bold">ทำไมต้องพ่วงข้างลานทอง</div>
        <div className="w-[1474px] h-[716px] px-[43px] pt-[19px] pb-[653px] left-[217px] top-[186px] absolute justify-center items-center inline-flex">
          <div className="w-[1388px] text-center text-black text-4xl font-bold">(ข้อมูลประวัติความเป็นมาของลานทอง)</div>
        </div>
      </div>
      <div className="w-[1920px] h-[1035px] left-0 top-[1804px] absolute">
      <div className="w-[1920px] h-[1034px] left-0 top-0 absolute bg-neutral-700" />
      <div className="w-[1920px] h-32 left-0 top-0 absolute bg-red-700" />
      <div className="left-[840px] top-[45px] absolute text-center text-white text-4xl font-bold">สินค้าและบริการ</div>
      <img className="w-[463px] h-[906px] left-[951px] top-[128px] absolute" src="463x906.png" />
      <img className="w-[466px] h-[906px] left-[485px] top-[128px] absolute" src="466x906.png" />
      <img className="w-[484px] h-[906px] left-[1px] top-[128px] absolute" src="484x906.png" />
      <img className="w-[506px] h-[908px] left-[1414px] top-[127px] absolute opacity-60" src="https://via.placeholder.com/506x908" />
      <div className="left-[74px] top-[576px] absolute text-center text-white text-4xl font-bold">มอเตอร์ไซด์มีพ่วงข้าง</div>
      <div className="left-[582px] top-[575px] absolute text-center text-white text-4xl font-bold">พ่วงข้างขายของ</div>
      <div className="left-[1090px] top-[585px] absolute text-center text-white text-4xl font-bold">พ่วงข้างวินเทจ </div>
      <div className="left-[1564px] top-[585px] absolute text-center text-white text-4xl font-bold">หมวดหมู่อื่นๆ</div>
    </div>

      <div className="w-[1920px] h-[149px] left-0 top-[2838px] absolute">
        <div className="w-[1920px] h-24 left-0 top-[14px] absolute bg-red-700" />
        <div className="w-[413px] h-[79px] left-[764px] top-[22px] absolute bg-zinc-800 bg-opacity-80 rounded-[39px]" />
        <div className="left-[794px] top-[35px] absolute text-center text-white text-4xl font-bold leading-[54px]">ช่องทางการติดต่อต่างๆ</div>
        <div className="w-[1920px] h-3.5 left-0 top-0 absolute bg-zinc-800" />
      </div>
    </div>

    </Layout>
  );
}
