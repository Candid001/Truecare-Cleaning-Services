import {useState, useRef, useEffect, useCallback} from "react";
import {Link} from "react-router-dom";
import Button from "../../Button.jsx";
//TODO: Use icon like this, check line 23
import Logo from "@assets/logo-full.svg?component";
import {Menu, X} from "lucide-react";
import NavbarLink from "./NavbarLink.jsx";
import NavDropdown from "@/components/layout/navbar/NavDropdown.jsx";
import {navItems} from "@/lib/utils.jsx";
import AdminModal from "@/components/AdminModal.jsx";

function Navbar() {
    // Admin modal — 5 logo clicks to open
    const [adminOpen, setAdminOpen] = useState(false);
    const logoClickCount = useRef(0);
    const logoClickTimer = useRef(null);

    const handleLogoClick = useCallback(() => {
        logoClickCount.current += 1;
        if (logoClickTimer.current) clearTimeout(logoClickTimer.current);
        if (logoClickCount.current >= 5) {
            logoClickCount.current = 0;
            setAdminOpen(true);
        } else {
            logoClickTimer.current = setTimeout(() => {
                logoClickCount.current = 0;
            }, 2000);
        }
    }, []);

    // Dropdown-related code
    const dropdownRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isServicesHover, setIsServicesHover] = useState(false);

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
        setIsServicesHover(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        if (showDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDropdown]);


    // Mobile-nav-related
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }


    return (
        <nav className="fixed top-0 left-0 max-w-full mx-auto right-0 z-50 bg-white py-4 shadow-xs border-b border-blue-100">
            <div className="flex justify-between items-center w-[90%] mx-auto">
                <Link to="/" onClick={handleLogoClick} style={{ userSelect: "none" }}>
                    <Logo/>
                </Link>
                <AdminModal open={adminOpen} onClose={() => setAdminOpen(false)} />

                {/* lg Screen */}
                <div className="hidden lg:flex justify-center gap-7">
                    {navItems.slice(0,2).map((item, index) => (
                        <NavbarLink key={index} name={item.name} to={item.to}/>
                    ))}

                    <NavDropdown
                        dropdownRef={dropdownRef}
                        showDropdown={showDropdown}
                        setIsServicesHover={setIsServicesHover}
                        isServicesHover={isServicesHover}
                        handleDropdownClick={handleDropdownClick}
                    />

                    {navItems.slice(2).map((item, index) => (
                        <NavbarLink key={index} name={item.name} to={item.to}/>
                    ))}
                </div>


                {/* Mobile Screen List */}
                {isOpen && (
                    <div
                        className="absolute top-18 left-0 w-full bg-white flex flex-col px-6 py-10 space-y-3 z-50 rounded-b-4xl"
                    >
                        {navItems.slice(0,2).map((item, index) => (
                            <NavbarLink key={index} name={item.name} to={item.to} isMobile={true} onClick={handleIsOpen}/>
                        ))}

                        <NavDropdown
                            dropdownRef={dropdownRef}
                            showDropdown={showDropdown}
                            setIsServicesHover={setIsServicesHover}
                            isServicesHover={isServicesHover}
                            handleDropdownClick={handleDropdownClick}
                            closeMobileNav={handleIsOpen}
                        />

                        {navItems.slice(2).map((item, index) => (
                            <NavbarLink key={index} name={item.name} to={item.to} isMobile={true} onClick={handleIsOpen}/>
                        ))}
                    </div>
                )}

                {/* Button & Mobile nav trigger */}
                <div className="flex items-center gap-2 text-btn-primary">
                    <div className={`hidden md:flex items-center gap-2`}>
                        <a href="https://truecarecleaningservices.setmore.com" target="_blank" rel="noopener noreferrer">
                            <Button
                                text="Book Now"
                                variant={`primary`}
                            />
                        </a>
                        <a href="/request-a-quote"><Button
                            text="Request a Quote"
                            variant={`primary`}
                        /></a>
                    </div>

                    {isOpen ? <X className="w-10 h-10 lg:hidden" onClick={handleIsOpen}/> :
                        <Menu className="w-10 h-10 lg:hidden" onClick={handleIsOpen}></Menu>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
