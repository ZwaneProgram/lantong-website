import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail, HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { FaLine } from "react-icons/fa";
import Layout from "@/components/layouts/Layout";
import Link from "next/link";

export default function ContactUs({ config }) {
    return (
        <Layout>
            <section className="mx-auto max-w-[1200px] px-4 xl:px-0 flex flex-col md:flex-row py-10">
                <div className="flex flex-col xl:flex-row xl:border xl:rounded xl:shadow xl:p-8 w-full px-4 gap-6 h-fit">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[36px] xl:text-start text-center font-semibold">
                            ติดต่อเรา
                        </h1>
                        <div className="flex flex-col gap-4">
                            {/* Facebook */}
                            <Link
                                href={config.social?.facebook_url}
                                className="flex flex-row p-4 gap-3 bg-[#4267B2] xl:bg-white hover:bg-slate-100 rounded-md"
                            >
                                <div className="flex items-center justify-center">
                                    <BsFacebook className="mr-2 w-[50px] h-[50px] xl:text-[#4267B2] text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className=" font-bold text-base xl:text-[#4267B2] text-white">
                                        Facebook
                                    </h3>
                                    <p className="font-semibold text-xl xl:text-[#4267B2] text-white">
                                        พ่วงข้างลานทอง
                                    </p>
                                </div>
                            </Link>

                            {/* Line */}
                            <Link
                                href={config.social?.line_url}
                                className="flex flex-row bg-[#06C755] xl:bg-white p-4 gap-3 hover:bg-slate-100 rounded-md"
                            >
                                <div className="flex items-center justify-center">
                                    <FaLine className="mr-2 w-[50px] h-[50px] xl:text-[#06C755] text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className=" font-bold text-base xl:text-[#06C755] text-white">
                                        Line
                                    </h3>
                                    <p className="font-semibold text-xl xl:text-[#06C755] text-white">
                                        lantongshop
                                    </p>
                                </div>
                            </Link>

                            {/* Email */}
                            <Link
                                href={"mailto:lantongshop@gmail.com"}
                                className="flex flex-row bg-[#FF5A60] xl:bg-white p-4 gap-3 hover:bg-slate-100 rounded-md"
                            >
                                <div className="flex items-center justify-center">
                                    <HiOutlineMail className="mr-2 w-[50px] h-[50px] xl:text-[#FF5A60] text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className=" font-bold text-base xl:text-[#FF5A60] text-white">
                                        Email us
                                    </h3>
                                    <p className="font-semibold text-xl xl:text-[#FF5A60] text-white">
                                        lantongshop@gmail.com
                                    </p>
                                </div>
                            </Link>

                            <Link
                                href={"#"}
                                className="flex flex-row bg-cyan-700 xl:bg-white p-4 gap-3 hover:bg-slate-100 rounded-md"
                            >
                                <div className="flex items-start justify-center">
                                    <HiOutlineOfficeBuilding className="mr-2 w-[50px] h-[50px] xl:text-cyan-700 text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className=" font-bold text-base xl:text-cyan-700 text-white">
                                        Address
                                    </h3>
                                    <p className="font-semibold text-xl xl:text-cyan-700 text-white">
                                        207/3 ถ.วังสิงห์คำ ต.ช้างม่อย
                                        อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50300
                                    </p>
                                </div>
                            </Link>
                            <div className="gap-4 flex flex-col xl:flex-row justify-between">
                                <p className="bg-[#4E4E4E] w-full text-white justify-center items-center text-xl rounded-md flex flex-row px-4 py-3">
                                    <AiOutlinePhone className="mr-2 rotate-90" />
                                    053 876 109
                                </p>
                                <p className="bg-[#4E4E4E] w-full text-white justify-center items-center text-xl rounded-md flex flex-row px-4 py-3">
                                    <AiOutlinePhone className="mr-2 rotate-90" />
                                    081 952 1342
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="xl:hidden" />

                    <div className="w-full">
                        <div className="bg-slate-500 xl:h-full"></div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export { getServerSideProps } from "@/utils/get-init-props";
