# STEAM Buds Web Application

> Hands-on learning company website for Indian innovators

## Requirements

- mise
- Node.js (v18+)
- npm

## Getting Started

### 1. Install Dependencies

```sh
npm install
```

### 2. Environment Setup

The application uses different environment files for different modes:

- **`.env.development`** - Used for local development (default)
- **`.env.production`** - Used for production builds
- **`.env.local`** - Local overrides (git-ignored, create from `.env.example`)

**For local development with custom settings:**

```sh
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your values
# This file is git-ignored and won't be committed
```

**Environment Variables:**
- `VITE_API_URL` - Backend API endpoint

See `.env.example` for all available configuration options.

### 3. Run the Application

**Development mode:**
```sh
npm run dev
```
The app will be available at `http://localhost:5173`

**Preview production build:**
```sh
npm run preview
```

### 4. Build for Production

```sh
npm run build
```

Build output will be in the `dist/` directory.

## Project Structure

```
src/
├── components/     # Reusable UI components (Header, Footer)
├── pages/          # Route pages (Home, About, Contact, etc.)
├── config/         # Configuration files (services, contact, etc.)
├── images/         # Static assets
└── index.css       # Global styles and Tailwind config
```

## Tech Stack

- **React** 18.2 - UI library
- **TypeScript** 5.0 - Type safety
- **Vite** 4.3 - Build tool
- **Tailwind CSS** 3.3 - Styling
- **React Router** 6.8 - Routing
- **Lucide React** - Icons

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start dev server on port 3000

## Contributing

1. Create a feature branch
2. Make your changes
3. Test the build: `npm run build`
4. Submit a pull request

## Documentation

- [Recommended Updates](./RECOMMENDED_UPDATES.md) - Comprehensive improvement guide
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
