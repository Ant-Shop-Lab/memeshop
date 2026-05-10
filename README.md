# MemeShop 🎭

A modern, responsive demo e-commerce store built with React 18+ and Vite.

## Features

- ✅ **React 18+** with modern hooks
- ✅ **Vite** for fast development and optimized builds
- ✅ **react-router-dom** for client-side routing
- ✅ **Responsive Design** (mobile-first approach)
- ✅ **Product Filtering** by category
- ✅ **Shopping Cart** with localStorage persistence
- ✅ **GitHub Pages Ready** deployment configuration
- ✅ **High Lighthouse Scores** optimized performance

## Tech Stack

- React 19
- Vite 8
- react-router-dom 7
- CSS3 with modern features (Grid, Flexbox, Custom Properties)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ant-Shop-Lab/memeshop.git
cd memeshop

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
memeshop/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   └── CartItem.jsx
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx
│   │   └── CartPage.jsx
│   ├── context/         # React Context providers
│   │   └── CartContext.jsx
│   ├── data/            # Mock data
│   │   └── products.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/                # Production build output
└── package.json
```

## Features Detail

### Shopping Cart
- Add/remove products
- Update quantities
- Persistent storage using localStorage
- Real-time cart total calculation

### Product Filtering
- Filter by category (All, Clothing, Accessories)
- Dynamic product count display
- Smooth transitions

### Responsive Design
- Mobile-first CSS approach
- Breakpoints at 768px and 1024px
- Optimized touch targets for mobile

## Routing

The app uses two main routes:
- `/` - Home page with product catalog and filtering
- `/cart` - Shopping cart page

Routes are configured with `basename="/memeshop"` for GitHub Pages compatibility.

## Performance Optimizations

- Lazy loading images
- Minimal bundle size
- CSS optimizations
- Efficient re-renders with React

## License

MIT
