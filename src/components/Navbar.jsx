import { Link, NavLink } from "react-router-dom";
import {
    // MapPin,
    // ChevronDown,
    ShoppingCartMinus,
} from "lucide-react";

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
    const navLinkClass = ({ isActive }) =>
        `${isActive
            ? "border-b-3 border-red-500"
            : "text-black"
        } cursor-pointer transition-all`;

    return (
        <div className="bg-white py-3 shadow-2xl px-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                {/* Logo and Location Section */}
                <div className="flex gap-7 items-center">

                    {/* Logo */}
                    <Link to="/">
                        <h1 className="font-bold text-3xl">
                            <span className="text-red-700 text-4xl font-serif">
                                S
                            </span>
                            iddarth
                            <span className="text-red-700 text-3xl font-serif">
                                a
                            </span>
                        </h1>
                    </Link>

                    {/* Location Section */}
                    {/* <div className="flex gap-2 items-center text-gray-500">
                        <MapPin
                            size={20}
                            className="text-red-500 shrink-0"
                        />

                        <div className="flex flex-col max-w-56">
                            {location ? (
                                <>
                                    <span
                                        className="font-semibold text-sm truncate"
                                        title={location.address}
                                    >
                                        {location.address || "Address unavailable"}
                                    </span>

                                    <span className="text-xs text-gray-500">
                                        Lat: {location.latitude?.toFixed(4)}
                                    </span>

                                    <span className="text-xs text-gray-500">
                                        Long: {location.longitude?.toFixed(4)}
                                    </span>
                                </>
                            ) : (
                                <span className="font-semibold text-sm">
                                    Add Location
                                </span>
                            )}
                        </div>

                        <ChevronDown size={16} />
                    </div> */}
                </div>

                {/* Menu Section */}
                <nav className="flex gap-7 items-center">

                    <ul className="flex gap-7 items-center text-xl font-semibold">
                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/product" className={navLinkClass}>
                                Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className={navLinkClass}>
                                About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" className={navLinkClass}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    {/* Cart */}
                    <Link to="/cart" className="relative">
                        <ShoppingCartMinus
                            size={28}
                            className="h-7 w-7"
                        />

                        <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
                            0
                        </span>
                    </Link>

                    {/* Authentication */}
                    <div className="flex items-center gap-2">
                        <SignedOut>
                            <SignInButton>
                                <button
                                    type="button"
                                    className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                                >
                                    Sign In
                                </button>
                            </SignInButton>

                            <SignUpButton>
                                <button
                                    type="button"
                                    className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                                >
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </SignedOut>

                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;

