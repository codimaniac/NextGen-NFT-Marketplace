# NextGen NFT Marketplace

A modern, feature-rich NFT marketplace demo built with **React 19**, **Vite**, and **Tailwind CSS v4**. This repository contains a fully functional frontend application, backend scaffold, and mock data for exploring NFT marketplace flows.

This project showcases best practices in modern frontend development, including component organization, routing, authentication flows, and responsive design. It serves as an excellent foundation for learning or building a production-ready NFT platform.

## ✨ Highlights

- **React 19 + Vite** frontend with lightning-fast HMR and optimized builds
- **Tailwind CSS v4** for modern, responsive styling
- **React Router v7** for sophisticated multi-page routing
- **Authentication scaffolding** (Login/Signup flows)
- **Full marketplace experience** (browse, search, view details, create listings)
- **Creator profiles** with stats and featured collections
- **NFT collection browser** with filtering and sorting
- **Creator tools** for minting and listing NFTs
- **Blog section** with carousel and featured posts
- **Contact & Support** pages with integrated messaging
- **Real-time notifications** with React Toastify
- **Mock API backend** with JSON Server (easily replaceable with real APIs)
- **Firebase integration** ready for authentication and storage
- **ESLint configuration** for code quality and consistency
- **Fully responsive** design optimized for mobile, tablet, and desktop

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 with Vite 7
- **Styling:** Tailwind CSS 4 with Vite plugin
- **Routing:** React Router v7
- **Icons:** React Icons (comprehensive icon library)
- **Notifications:** React Toastify
- **Mock API:** JSON Server with db.json
- **Backend Scaffold:** Node.js (ESM) with nodemon
- **Build Tool:** Vite (next-gen frontend tooling)
- **Linting:** ESLint with React plugins
- **Development:** Supports hot module replacement (HMR)

## 📂 Project Structure

### Core Directories

- **`index.html`, `src/`** - Main React frontend application
- **`src/pages/`** - Page components (Homepage, Marketplace, NFTDetail, Creator profiles, etc.)
- **`src/containers/`** - Layout containers and section components
- **`src/components/`** - Reusable UI components
- **`src/hooks/`** - Custom React hooks (useCarousel, useFetch)
- **`src/utils/`** - Utility functions
- **`data/db.json`** - Mock API data for development
- **`backend/`** - Node.js backend scaffold
- **`public/`** - Static assets and Netlify redirects

### Key Pages

- **Homepage** - Hero section, featured collections, top creators, latest blog
- **Marketplace** - Browse and search NFTs
- **NFT Detail** - View individual NFT details and reviews
- **Creator Profile** - View creator info and their collections
- **Create NFT** - Mint and list new NFTs
- **Collectibles** - Browse NFT collections
- **Top Creators** - Discover top creators and their stats
- **Blog** - Articles and updates
- **Authentication** - Login and Signup pages
- **Support** - Contact and FAQ pages

## 🚀 Getting Started (Local Development)

**Requirements:** Node.js 18+ (Node.js 20+ recommended), npm

### Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the frontend dev server**

   ```bash
   npm run dev
   ```

   The Vite dev server runs at `http://localhost:5173` with hot module replacement enabled.

3. **(Optional) Start the mock JSON API**

   ```bash
   npm run server
   ```

   Runs `json-server --watch data/db.json` providing a REST API for mock data at `http://localhost:3000`.

4. **(Optional) Start the backend Node.js server**

   ```bash
   cd backend
   npm install
   npm run server
   ```

   Runs with `nodemon` for automatic restarts. Supports `.env` files in the backend folder.

### Development Workflow

- Frontend dev server with HMR: `npm run dev`
- Mock API server: `npm run server` (in another terminal)
- Production build: `npm run build`
- Code linting: `npm run lint`
- Preview production build: `npm run preview`

## ⚙️ Configuration

### Environment Variables

Create `.env` files as needed:

- **Root `.env`** - For frontend configuration
- **`backend/.env`** - For backend server configuration

### JSON Server Configuration

Mock data is defined in `data/db.json`. Modify this file to:

- Add/remove NFTs
- Adjust creator information
- Update collection data
- Add blog posts

## 💡 Development Notes

### NPM Scripts

Available scripts in `package.json`:

- **`npm run dev`** — Start Vite dev server with HMR (typically runs at http://localhost:5173)
- **`npm run server`** — Start JSON Server watching `data/db.json` (typically runs at http://localhost:3000)
- **`npm run build`** — Build production assets with Vite (outputs to `dist/`)
- **`npm run lint`** — Run ESLint to check code quality
- **`npm run preview`** — Preview production build locally

### Backend Scripts

The `backend/` folder has its own `package.json`:

- **`npm run server`** — Start Node.js server with nodemon, supports `.env` configuration

### Component Architecture

- **Pages:** Route-level components in `src/pages/`
- **Containers:** Layout and section components in `src/containers/`
- **Components:** Reusable UI components organized by feature
- **Hooks:** Custom React hooks for carousel and data fetching
- **Utils:** Helper functions for common tasks

### Styling Approach

- Tailwind CSS v4 with Vite plugin for optimized builds
- Custom responsive breakpoints and color scheme
- Component-level Tailwind classes for maintainability
- CSS modules support available if needed

### Data Management

- Mock data stored in `data/db.json`
- `useFetch` hook for API calls
- Ready for integration with real backend APIs
- Can be easily replaced with Redux, Zustand, or other state management

## 🎨 Design & Assets

This project uses a visual design template from **Template Jungle**. The UI/UX design and assets were professionally adapted from their marketplace template.

**Design Credit:** [Template Jungle](https://templatesjungle.com/)

### Design Features

- Modern, professional aesthetic
- Consistent color scheme and typography
- Responsive design patterns
- Accessibility considerations
- Dark mode friendly

For more design templates and resources, visit [Template Jungle](https://templatesjungle.com/).

## 🤝 Contributing

Contributions are welcome! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature/your-feature`)
3. **Make your changes** with clear, descriptive commits
4. **Run linting** (`npm run lint`) to ensure code quality
5. **Test thoroughly** with `npm run dev`
6. **Submit a pull request** with a clear description of changes

### Guidelines

- Keep commits atomic and well-described
- Follow the existing code style and component patterns
- Update README if adding new features
- Test across different screen sizes
- Ensure no ESLint errors before submitting PR

For major features, please open an issue first to discuss the approach.

## 📝 License

MIT License - Feel free to use this project for personal, educational, or commercial purposes.

## 🙋 Support & Questions

Have questions or found an issue? Please open a GitHub issue with:

- Clear description of the problem
- Steps to reproduce (if applicable)
- Your environment (Node.js version, OS, browser)
- Screenshots (if UI-related)

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Router Guide](https://reactrouter.com)
- [NFT Standards (ERC-721)](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/)

---

**Built with ❤️ using modern web technologies**
