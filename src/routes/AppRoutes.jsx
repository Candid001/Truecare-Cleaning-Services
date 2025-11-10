import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar.jsx";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import HomeApartments from "../pages/HomeApartments";
import OfficeAndSMB from "@/pages/OfficeAndSMB.jsx";
import PMAndRealtors from "@/pages/PMAndRealtors.jsx";
import ClinicsAndWellnessCenter from "@/pages/ClinicsAndWellnessCenter.jsx";
import ServiceArea from "../pages/ServiceArea";
import Footer from "../components/layout/Footer";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="mt-18">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<AboutUs/>}/>
                    <Route path="home-and-apartments-cleaning" element={<HomeApartments/>}/>
                    <Route path="office-and-small-business-cleaning" element={<OfficeAndSMB/>}/>
                    <Route path="property-realtors-cleaning" element={<PMAndRealtors/>}/>
                    <Route path="clinics-and-wellness-centers-cleaning" element={<ClinicsAndWellnessCenter/>}/>
                    <Route path="service-area" element={<ServiceArea/>}/>
                    <Route path="contact-us" element={<ContactUs/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default AppRoutes;