import Head from "next/head";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashboardSidebar from "./DashboardSidebar";
import { motion } from "framer-motion";
import { useDashboardSidebar } from "@/contexts/dashboard-sidebar-context";
import DashboardNavbar from "./DashboardNavbar";

const Layout = ({ children, isDashboard }) => {
    const { isOpen, isMobile } = useDashboardSidebar();

    return (
        <>
            <Head>
                <title>หจก.ลานทองเชียงใหม่</title>
                <meta name="description" content="" />
                <meta
                    name="keywords"
                    content="พ่วงข้าง, ลานทอง, ขายรถเชียงใหม่"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Lantong Shop" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />
                <link rel="icon" href="" />
            </Head>
            <div
                id="page-wrapper"
                className={`min-h-screen flex flex-col text-gray-900`}
            >
                {isDashboard ? (
                    // Layout หน้า Dashboard
                    <>
                        <DashboardNavbar />
                        <div className="flex-grow">
                            <DashboardSidebar />
                            <motion.div
                                id="page-body"
                                className={`px-6 mt-20`}
                                animate={isOpen ? "mount" : "unmount"}
                                initial={isMobile ? "unmount" : "mount"}
                                exit="unmount"
                                variants={{
                                    unmount: {
                                        marginLeft: 0,
                                        transition: { duration: 0.5 },
                                    },
                                    mount: {
                                        marginLeft: isMobile ? 0 : "280px",
                                        transition: { duration: 0.5 },
                                    },
                                }}
                            >
                                {children}
                            </motion.div>
                        </div>
                    </>
                ) : (
                    // Layout ทั่วไป
                    <>
                        <Navbar />
                        <div className="flex-grow">
                            <Sidebar />
                            {children}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Layout;
