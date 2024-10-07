import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Shop = () => {
    const products = [
        { id: 1, image: 'https://placehold.co/200x200', name: 'The animal Award', price: '$95.00', rating: 0, sale: false },
        { id: 2, image: 'https://placehold.co/200x200', name: 'Crisp elegant clogue', price: '$80.00', rating: 4, sale: false },
        { id: 3, image: 'https://placehold.co/200x200', name: 'Sky Blue Designer Shirt', price: '$80.00', oldPrice: '$140.00', rating: 0, sale: true },
        { id: 4, image: 'https://placehold.co/200x200', name: 'Dapibus in Scoll', price: '$75.00', rating: 0, sale: false },
        { id: 5, image: 'https://placehold.co/200x200', name: 'Stunning Purse', price: '$98.00', rating: 0, sale: false },
        { id: 6, image: 'https://placehold.co/200x200', name: 'Low neck black dress', price: '$95.00', oldPrice: '$120.00', rating: 0, sale: true },
        { id: 7, image: 'https://placehold.co/200x200', name: 'Designer Court', price: '$120.00', rating: 0, sale: false },
        { id: 8, image: 'https://placehold.co/200x200', name: 'Beautifully design red shoes', price: '$80.00', oldPrice: '$120.00', rating: 4, sale: true },
        { id: 9, image: 'https://placehold.co/200x200', name: 'Black Loavent Jeans', price: '$110.00', rating: 0, sale: false },
        { id: 10, image: 'https://placehold.co/200x200', name: 'White Designer Dress', price: '$80.00', oldPrice: '$130.00', rating: 4, sale: true },
    ];

    const ProductCard = ({ product }) => (
        <NavLink to={`/product/${product.id}`} className="border p-4 relative hover:shadow-lg transition-shadow duration-300">
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
        </NavLink>
    );

    const App = () => (
        <div className="container mx-auto p-8">
            <div className="flex justify-center mb-8">
                <NavLink
                    to="/featured"
                    className={({ isActive }) => isActive ? "text-orange-500 mx-4" : "text-gray-500 mx-4"}
                >
                    FEATURED
                </NavLink>
                <NavLink
                    to="/latest"
                    className={({ isActive }) => isActive ? "text-orange-500 mx-4" : "text-gray-500 mx-4"}
                >
                    LATEST
                </NavLink>
                <NavLink
                    to="/best-seller"
                    className={({ isActive }) => isActive ? "text-orange-500 mx-4" : "text-gray-500 mx-4"}
                >
                    BEST SELLER
                </NavLink>
                <NavLink
                    to="/sale-products"
                    className={({ isActive }) => isActive ? "text-orange-500 mx-4" : "text-gray-500 mx-4"}
                >
                    SALE PRODUCTS
                </NavLink>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Dynamic Component Render */}
            <div className="mt-8">
                <Outlet />
            </div>

            {/* More Products Button */}
            <div className="text-center mt-8">
                <NavLink to="/more-products">
                    <button className="bg-orange-500 text-white px-6 py-2">More Products</button>
                </NavLink>
            </div>
        </div>
    );

    return <App />;
}

export default Shop;
