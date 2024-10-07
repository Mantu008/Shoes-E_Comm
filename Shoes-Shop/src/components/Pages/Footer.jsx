import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRss, FaSkype, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center px-4">
                {/* Social Media Links */}
                <div className="flex flex-wrap justify-center space-x-4 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" className="text-white hover:text-orange-500 transition">
                        <FaRss />
                    </a>
                    <a href="#" className="text-white hover:text-orange-500 transition">
                        <FaSkype />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition">
                        <FaInstagram />
                    </a>
                </div>

                {/* Logo */}
                <div className="mb-4 text-2xl md:text-3xl font-bold">
                    <span className="text-white">K</span>
                    <span className="text-orange-500">ite</span>
                    <span className="text-white">F</span>
                    <span className="text-orange-500">oot</span>
                </div>

                {/* Subscription Form */}
                <div className="mb-4 flex justify-center flex-wrap space-y-2 md:space-y-0">
                    <input
                        type="text"
                        className="p-2 w-full md:w-64 lg:w-1/3 mb-2 md:mb-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter your email"
                    />
                    <button className="bg-orange-500 text-white p-2 w-full md:w-auto hover:bg-orange-600 transition">SUBSCRIBE</button>
                </div>

                {/* Navigation Links */}
                <div className="mb-4">
                    <nav className="flex flex-wrap justify-center space-x-2 md:space-x-4">
                        <Link to="/" className="text-white hover:text-orange-500 transition">Home</Link>
                        <span className="text-white">|</span>
                        <Link to="/shop" className="text-white hover:text-orange-500 transition">Shop</Link>
                        <span className="text-white">|</span>
                        <Link to="/blog" className="text-white hover:text-orange-500 transition">Blog</Link>
                        <span className="text-white">|</span>
                        <Link to="/media" className="text-white hover:text-orange-500 transition">Media</Link>
                        <span className="text-white">|</span>
                        <Link to="/shortcode" className="text-white hover:text-orange-500 transition">ShortCode</Link>
                        <span className="text-white">|</span>
                        <Link to="/features" className="text-white hover:text-orange-500 transition">Features</Link>
                        <span className="text-white">|</span>
                        <Link to="/about-us" className="text-white hover:text-orange-500 transition">About Us</Link>
                        <span className="text-white">|</span>
                        <Link to="/contact-us" className="text-white hover:text-orange-500 transition">Contact Us</Link>
                    </nav>
                </div>

                {/* Copyright */}
                <div className="text-gray-500 text-xs md:text-sm">
                    <p>Copyright © 2024 KiteFoot, All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
