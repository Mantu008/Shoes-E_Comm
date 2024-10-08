import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Data from '../../../AllDemoData.json';

const ProductDetail = () => {
    const { id, type } = useParams(); // Extracting id and type from the URL parameters

    // Use type to access the correct data
    const AllDataWithType = Data[type];
    const product = AllDataWithType ? AllDataWithType.find(data => data.id == id) : null; // Use find instead of filter

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    // Render nothing if product is not found
    if (!product) {
        return <div className="text-center text-red-500">Product not found.</div>;
    }

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left column - Product Images */}
                <div>
                    <div className="mb-4">
                        <img
                            src={product.image} // Use the image from the product data
                            alt={product.name} // Use the product name for accessibility
                            className="w-full h-auto max-h-[600px] object-cover rounded-lg cursor-pointer" // Make image bigger with max height
                            onClick={() => openModal(product.image)}
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((idx) => (
                            <img
                                key={idx}
                                src="https://media.istockphoto.com/id/1276342010/photo/top-view-of-pair-of-brown-shoes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=3rGNZTZj3UX_APm7UrnqQDrkdojt2QyWQCg4SjRzOQ4=" // Placeholder thumbnails
                                alt={`Product thumbnail ${idx}`}
                                className="w-full h-auto rounded cursor-pointer hover:opacity-75"
                                onClick={() => openModal(product.image)} // Add modal open functionality
                            />
                        ))}
                    </div>
                </div>

                {/* Right column - Product Details */}
                <div>
                    <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                            {[...Array(product.rating)].map((_, star) => (
                                <span key={star}>★</span>
                            ))}
                        </div>
                        <span className="ml-2 text-gray-500">(3 customer reviews)</span>
                    </div>
                    <div className="text-2xl font-bold mb-4">{product.price}</div>

                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="mb-4">
                        <span className="text-green-600 font-semibold">868 in stock</span>
                    </div>

                    <div className="flex items-center mb-6">
                        <button
                            onClick={() => handleQuantityChange(-1)}
                            className="px-4 py-2 border rounded-l hover:bg-blue-600 hover:text-white transition duration-200"
                        >
                            -
                        </button>
                        <span className="px-4 py-2 border-t border-b">
                            {quantity}
                        </span>
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="px-4 py-2 border rounded-r hover:bg-blue-600 hover:text-white transition duration-200"
                        >
                            +
                        </button>
                        <button className="ml-4 bg-blue-600 text-white px-6 py-2 rounded transition duration-200 hover:bg-blue-700">
                            Add to cart
                        </button>
                    </div>

                    <div className="flex space-x-4 mb-6">
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition duration-200">
                            <AiOutlineHeart size={20} className="mr-2" />
                            Add to wishlist
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blue-600 transition duration-200">
                            <AiOutlineShareAlt size={20} className="mr-2" />
                            Compare
                        </button>
                    </div>

                    <div className="border-t pt-4">
                        <div className="mb-2">
                            <span className="font-semibold">Categories:</span>
                            <span className="ml-2 text-blue-600">Footwear, Sports and Outdoors</span>
                        </div>
                        <div>
                            <span className="font-semibold">Tags:</span>
                            <span className="ml-2 text-blue-600">Shoes, Sport</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Tabs */}
            <div className="mt-12">
                <div className="border-b">
                    <div className="flex space-x-8">
                        {['description', 'additional information', 'reviews (3)'].map((tab) => (
                            <button
                                key={tab}
                                className={`py-2 capitalize ${activeTab === tab ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-500'
                                    } hover:text-blue-600 transition duration-200`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="py-6">
                    {activeTab === 'description' && (
                        <div>
                            <h3 className="font-semibold mb-4">Product Description</h3>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <h3 className="font-semibold mb-4">Unordered List</h3>
                            <ul className="list-disc pl-5 text-gray-600 mb-4">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Suspendisse ullamcorper ex eu massa mollis ullamcorper.</li>
                                <li>Vestibulum sed mauris vel lectus rhoncus malesuada id tempus nibh.</li>
                            </ul>

                            <h3 className="font-semibold mb-4">Ordered List</h3>
                            <ol className="list-decimal pl-5 text-gray-600 mb-4">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Suspendisse ullamcorper ex eu massa mollis ullamcorper.</li>
                                <li>Vestibulum sed mauris vel lectus rhoncus malesuada id tempus nibh.</li>
                            </ol>
                        </div>
                    )}

                    {activeTab === 'additional information' && (
                        <div>
                            <h3 className="font-semibold mb-4">Additional Information</h3>
                            <p className="text-gray-600 mb-4">Here you can add more details about the product, such as dimensions, weight, and material.</p>
                        </div>
                    )}

                    {activeTab === 'reviews (3)' && (
                        <div>
                            <h3 className="font-semibold mb-4">Customer Reviews</h3>
                            <div className="border p-4 rounded mb-4">
                                <p className="font-semibold">John Doe</p>
                                <p className="text-gray-600">"Great product! Highly recommend."</p>
                            </div>
                            <div className="border p-4 rounded mb-4">
                                <p className="font-semibold">Jane Smith</p>
                                <p className="text-gray-600">"Very comfortable and stylish."</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal for Image */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 m-4 text-white"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt="Selected product"
                            className="w-full max-w-[90vw] h-auto rounded-lg" // Make modal image larger
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
