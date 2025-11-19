import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThreeDots } from "react-loader-spinner";
import Navbar from "../components/layout/navbar/Navbar.jsx";
import Footer from "../components/layout/Footer";
import { Toaster } from "sonner";

const Home = lazy(() => import("../pages/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const HomeApartments = lazy(() => import("../pages/HomeApartments"));
const OfficeAndSMB = lazy(() => import("@/pages/OfficeAndSMB.jsx"));
const PMAndRealtors = lazy(() => import("@/pages/PMAndRealtors.jsx"));
const ClinicsAndWellnessCenter = lazy(() =>
  import("@/pages/ClinicsAndWellnessCenter.jsx")
);
const ConstructionCleaning = lazy(() =>
  import("@/pages/ConstructionCleaning.jsx")
);
const RequestAQuote = lazy(() => import("@/pages/RequestAQuote.jsx"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense
        fallback={
          <div className="w-full h-screen flex justify-center items-center">
            <ThreeDots height="80" width="80" color="#0066CC" />
          </div>
        }
      >
        <div className="max-w-full mx-auto shadow-md">
          <div className="mt-18">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route
                path="home-and-apartments-cleaning"
                element={<HomeApartments />}
              />
              <Route
                path="office-and-small-business-cleaning"
                element={<OfficeAndSMB />}
              />
              <Route
                path="property-realtors-cleaning"
                element={<PMAndRealtors />}
              />
              <Route
                path="clinics-and-wellness-centers-cleaning"
                element={<ClinicsAndWellnessCenter />}
              />
              <Route
                path="post-construction-cleaning"
                element={<ConstructionCleaning />}
              />
              <Route path="request-a-quote" element={<RequestAQuote />} />
              <Route path="contact-us" element={<ContactUs />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Suspense>

      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

export default AppRoutes;
