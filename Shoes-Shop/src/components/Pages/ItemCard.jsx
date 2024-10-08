import React, { useState } from 'react';
import { BsEmojiFrown } from 'react-icons/bs';

const ItemCard = ({ RecentArrivelProducts, Headding }) => {
    const [visibleCount, setVisibleCount] = useState(5);

    const loadMoreProducts = () => {
        if (visibleCount < RecentArrivelProducts.length) {
            setVisibleCount(prevCount => prevCount + 5);
        }
    };

    const hasMoreProducts = visibleCount < RecentArrivelProducts.length;

    const ProductCard = ({ product }) => (
        <div className="border p-4 relative hover:shadow-lg transition-shadow duration-300 bg-gray-100 hover:cursor-pointer">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            {product.sale && <span className="bg-black text-white px-2 py-1 text-xs absolute top-2 left-2">-SALE</span>}
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fa fa-star ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}></i>
                ))}
            </div>
            <div className="text-lg font-bold">
                {product.price}
                {product.oldPrice && <span className="text-gray-500 line-through ml-2">{product.oldPrice}</span>}
            </div>
        </div>
    );

    return (
        <div className="container mx-auto p-8 bg-white">
            <h1 className="text-3xl font-bold text-center mb-8">{Headding}</h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {RecentArrivelProducts.slice(0, visibleCount).map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Load More Products Button */}
            <div className="text-center mt-8">
                {hasMoreProducts ? (
                    <button onClick={loadMoreProducts} className="bg-orange-500 text-white px-6 py-2">Load More</button>
                ) : (
                    <p className="text-black-500">
                        <span className="flex items-center justify-center font-bold">
                            <BsEmojiFrown className="mr-2 text-black-500" /> No more products to display
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ItemCard;
