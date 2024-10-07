import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsEmojiFrown } from 'react-icons/bs';

const RecentArrival = () => {
    const products = [
        { id: 1, image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D', name: 'Classic Leather Shoes', price: '$95.00', rating: 0, sale: false },
        { id: 2, image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D', name: 'Elegant Black Heels', price: '$80.00', rating: 4, sale: false },
        { id: 3, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww', name: 'Sporty Sneakers', price: '$80.00', oldPrice: '$140.00', rating: 0, sale: true },
        { id: 4, image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww', name: 'Casual Loafers', price: '$75.00', rating: 0, sale: false },
        { id: 5, image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNob2VzfGVufDB8fDB8fHww', name: 'Stylish Ankle Boots', price: '$98.00', rating: 0, sale: false },
        { id: 6, image: 'https://images.unsplash.com/photo-1555378322-2d4b84bc2790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNob2VzfGVufDB8fDB8fHww', name: 'Low-cut Running Shoes', price: '$95.00', oldPrice: '$120.00', rating: 0, sale: true },
        { id: 7, image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNob2VzfGVufDB8fDB8fHww', name: 'Designer Formal Shoes', price: '$120.00', rating: 0, sale: false },
        { id: 8, image: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNob2VzfGVufDB8fDB8fHww', name: 'Red High Heels', price: '$80.00', oldPrice: '$120.00', rating: 4, sale: true },
        { id: 9, image: 'https://images.unsplash.com/photo-1515555230216-82228b88ea98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHNob2VzfGVufDB8fDB8fHww', name: 'Comfort Slip-On Shoes', price: '$110.00', rating: 0, sale: false },
        { id: 10, image: 'https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHNob2VzfGVufDB8fDB8fHww', name: 'White Sport Shoes', price: '$80.00', oldPrice: '$130.00', rating: 4, sale: true },
    ];

    const [visibleCount, setVisibleCount] = useState(5);

    const loadMoreProducts = () => {
        if (visibleCount < products.length) {
            setVisibleCount(prevCount => prevCount + 5);
        }
    };

    const hasMoreProducts = visibleCount < products.length;
    const ProductCard = ({ product }) => (
        <div className="border p-4 relative hover:shadow-lg transition-shadow duration-300 bg-gray-100">
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
            <h1 className="text-3xl font-bold text-center mb-8">RECENT ARRIVAL</h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.slice(0, visibleCount).map(product => (
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
}

export default RecentArrival;
