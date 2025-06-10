# E-Commerce React Application

A modern, feature-rich e-commerce web application built with React, Vite, and Tailwind CSS. This application provides a complete shopping experience with product browsing, cart management, payment processing, and responsive design.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse products with detailed views and multiple images
- **Shopping Cart**: Add/remove items, quantity management with persistent state
- **Collections & Categories**: Organized product browsing by categories
- **Search & Filters**: Advanced filtering and search capabilities
- **User Authentication**: Sign-in functionality
- **Payment Integration**: Stripe payment processing
- **Responsive Design**: Mobile-first design with Tailwind CSS

### Advanced Features
- **Lazy Loading**: Component-based lazy loading for optimal performance
- **Skeleton Loading**: Smooth loading states with skeleton components
- **Image Optimization**: Blur image loading for better UX
- **Animations**: Smooth transitions using Framer Motion
- **State Management**: Zustand for cart management and Redux Toolkit for global state
- **Error Handling**: 404 pages and graceful error boundaries

### UI Components
- **Hero Sections**: Video and promotional hero components
- **Product Sliders**: Bestseller and category sliders
- **Interactive Filters**: Dropdown filters and range sliders
- **Navigation**: Dynamic navbar with cart integration
- **Footer**: Comprehensive footer with links and information

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with modern hooks and features
- **Vite** - Fast build tool and dev server
- **React Router DOM 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework

### State Management
- **Zustand** - Lightweight state management for cart
- **TanStack Query** - Data fetching and caching

### UI & Animation
- **Framer Motion** - Animation library
- **Heroicons** - Beautiful SVG icons

### Backend Integration
- **Firebase** - Backend services and database
- **Supabase** - Alternative backend services
- **Stripe** - Payment processing

### Development Tools
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing
- **UUID** - Unique identifier generation

## 📦 Installation

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/kahirhumibntwerag/celeste.git
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   Create a `.env` file in the root directory and add your environment variables:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BlurImage.jsx   # Optimized image loading
│   ├── ScrollTop.jsx   # Scroll to top functionality
│   └── Muti/           # Multi-state components
├── features/           # Feature-based modules
│   ├── Auth/           # Authentication components
│   ├── Cart/           # Shopping cart functionality
│   ├── Collection/     # Product collections
│   ├── Filters/        # Search and filter components
│   ├── Footer/         # Footer component
│   ├── Hero/           # Hero sections
│   ├── Navbar/         # Navigation component
│   ├── Pages/          # Main application pages
│   ├── Product/        # Product components
│   ├── Slider/         # Various slider components
│   ├── Stripe/         # Payment integration
│   └── VideoHero/      # Video hero component
├── hooks/              # Custom React hooks
├── store/              # State management
│   └── cartStore.js    # Zustand cart store
├── contexts/           # React contexts
├── config/             # Configuration files
├── assets/             # Static assets
└── scripts/            # Utility scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages & Routes

- **Home** (`/`) - Main landing page with featured products
- **Product Details** (`/product/:productId`) - Individual product view
- **Collections** (`/collections/:category`) - Category-based product listings
- **About** (`/about`) - About page
- **Authentication** (`/authentication`) - Sign-in page
- **Checkout** (`/checkout`) - Stripe payment checkout
- **Order Complete** (`/complete`) - Order confirmation page

## 🎨 Styling

This project uses **Tailwind CSS 4** for styling with:
- Custom color palette and design system
- Responsive breakpoints for mobile-first design
- Component-based styling approach
- Smooth animations and transitions

## 🔄 State Management

### Cart Management (Zustand)
- Add/remove items
- Update quantities
- Persist cart state
- Calculate totals

### Global State (Redux Toolkit)
- User authentication state
- Product data management
- API state management

## 🚀 Deployment

The project is configured for deployment with:
- **Firebase Hosting** - Production hosting
- **Vite Build Optimization** - Optimized production builds
- **Environment Variables** - Secure configuration management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation in the `/docs` folder
- Review the component examples in `/src/features`

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
