# 👟 Shoes E-Commerce Website (MERN Stack)

An end-to-end online shoe store built with the MERN stack. This platform allows users to browse, search, filter, and buy shoes, while admins can manage products, orders, and users through a dedicated admin panel.

---

## 📌 Key Features

### 🛍️ For Customers:
- Browse shoes by category (Men, Women, Kids, Sports)
- Filter and sort products by size, brand, color, price
- View detailed product pages with images and size selection
- Add to cart and wishlist
- Secure checkout with address and payment
- Track orders and view order history
- Register/Login with JWT authentication

### 🧑‍💼 For Admins:
- Admin dashboard to manage products, orders, and users
- Create, update, delete product listings
- View sales and order analytics
- Manage stock and product availability

### 🔒 System-Wide:
- JWT-based authentication & authorization
- Role-based access (customer vs admin)
- Responsive and mobile-first UI
- Optimized for performance and SEO
- Payment integration (e.g., Razorpay/Stripe)
- Product review and rating system

---

## 🛠️ Tech Stack

| Layer        | Technology Used                     |
|--------------|--------------------------------------|
| Frontend     | React.js, Axios, React Router DOM    |
| Backend      | Node.js, Express.js                 |
| Database     | MongoDB, Mongoose                   |
| Authentication | JWT                               |
| Payment      | Razorpay or Stripe (optional)       |
| Styling      | Tailwind CSS / Bootstrap            |
| Image Upload | Cloudinary or Firebase Storage      |

---

## 🧾 Mongoose Schemas

### 👤 User Model

```js
{
  name: String,
  email: String,
  password: String, // Hashed
  role: 'user' | 'admin',
  address: String,
  cart: [ProductRef]
}
👟 Product Model
js
Copy
Edit
{
  name: String,
  brand: String,
  category: String, // Men, Women, Kids
  sizes: [Number], // e.g. [6,7,8,9]
  price: Number,
  stock: Number,
  images: [String],
  description: String,
  rating: Number,
  reviews: [ReviewRef],
  createdAt: Date
}
🧾 Order Model
js
Copy
Edit
{
  userId: ObjectId,
  items: [{ productId, quantity, size }],
  shippingAddress: String,
  totalAmount: Number,
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled',
  paymentStatus: 'unpaid' | 'paid',
  createdAt: Date
}
📂 Folder Structure
pgsql
Copy
Edit
shoes-ecommerce/
├── client/             # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── contexts/
│       └── App.jsx
├── server/             # Node + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── .env
├── README.md
└── package.json
🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/shoes-ecommerce.git
cd shoes-ecommerce
2. Install Dependencies
bash
Copy
Edit
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
3. Configure Environment Variables
Create a .env file in /server:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4. Run the App
bash
Copy
Edit
# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm start
🔐 Authentication & Authorization
JWT-based token authentication

Role-based route protection (user vs admin)

Middleware to protect private routes

⚡ Optional Features
Search bar with auto-suggestions

Coupon code / discount engine

Email notifications using Nodemailer

PDF invoice generation

PWA (Progressive Web App) support

📈 Future Enhancements
AI-based product recommendation

Multi-vendor support

Product reviews with image uploads

Mobile App (React Native / Capacitor)

Inventory alert system for admins

🤝 Contribution Guidelines
bash
Copy
Edit
# Fork the repo
git clone https://github.com/yourusername/shoes-ecommerce.git
cd shoes-ecommerce

# Create a new branch
git checkout -b feature-name

# Make your changes
git commit -am 'Add new feature'

# Push the branch
git push origin feature-name

# Submit a pull request 🚀
