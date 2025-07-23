import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import DaftarStasi from "../components/DaftarStasi";
import HalamanUtama from "../components/HalamanUtama";

import SejarahParoki from "../components/SejarahParoki";
import VisiMisiParoki from "../components/VisiMisiParoki";
import PastorParoki from "../components/PastorParoki";

import WilayahPusat from "../pages/WilayahPusat";
import BalaiPinangHulu from "../pages/BalaiPinangHulu";
import Marawa from "../pages/Marawa";
import SekucingLabar from "../pages/SekucingLabar";
import LabaiHilir from "../pages/LabaiHilir";

const router = createBrowserRouter([ 
    {
        path: "/",
        element: <HalamanUtama />,
    },
    {
        path: "/daftar-stasi",
        element: <DaftarStasi />,
    },
    {
        path: "/sejarah-paroki",
        element: <SejarahParoki />,
    },
    {
        path: "/visi-misi-paroki",
        element: <VisiMisiParoki />,
    },
    {
        path: "/pastor-paroki",
        element: <PastorParoki />,
    },
    {
        path: "/balai-pinang-hulu",
        element: <BalaiPinangHulu />,
    },
    {
        path: "/marawa",
        element: <Marawa />,
    },
    {
        path: "/sekucing-labar",
        element: <SekucingLabar />,
    },
    {
        path: "/labai-hilir",
        element: <LabaiHilir />,
    },
    {
        path: "/wilayah-pusat",
        element: <WilayahPusat />,
    }
]);

const AppRouter = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;