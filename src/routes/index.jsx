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

import DoaLiturgi from "../components/DoaLiturgi";
import Sakramen from "../components/Sakramen"; 

import PetaParoki from "../pages/PetaParoki";
import MasterPlan from "../pages/MasterPlan";

import HalamanDetailKegiatan from "../components/HalamanDetailKegiatan";

import Dpp from "../components/Dpp"; 

import Kegiatan from "../components/Kegiatan"; 

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
    },
    {
        path: "/doa-liturgi",
        element: <DoaLiturgi />,
    },
    {
        path: "/sakramen",
        element: <Sakramen />,
    },
    {
        path: "/peta-paroki",
        element: <PetaParoki />,
    },
    {
        path: "/master-plan",
        element: <MasterPlan />,
    },
    {
        path: "/dpp",
        element: <Dpp />,
    },
    {
        path: "/kegiatan/:id",
        element: <HalamanDetailKegiatan />,
    },
    {
        path: "/kegiatan",
        element: <Kegiatan />,
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