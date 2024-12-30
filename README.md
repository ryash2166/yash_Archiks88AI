# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Project Setup with Vite, Tailwind CSS, Masonry Layout, React Icons, and Bootstrap

This guide provides a step-by-step process to set up a project using Vite as the build tool, Tailwind CSS for styling, Masonry for dynamic grid layouts, React Icons for vector icons, and Bootstrap for additional UI components.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 14 or higher
- **npm**: Comes with Node.js installation
- **Git**: To clone repositories

---

## 1. Initialize the Project with Vite

1. Run the following command to create a Vite project:

   ```bash
   npm create vite@latest my-project
   ```

2. Choose your framework and variant (e.g., React).
3. Navigate to your project directory:

   ```bash
   cd my-project
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

---

## 2. Install Tailwind CSS

1. Add Tailwind CSS as a dependency:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. Configure Tailwind by editing the `tailwind.config.js` file:

   ```javascript
   module.exports = {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Add Tailwind to your CSS file (e.g., `src/index.css`):

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## 3. Add Masonry Layout

1. Install the React Masonry component:

   ```bash
   npm install react-masonry-css
   ```

2. Use Masonry in your component:

   ```javascript
   import Masonry from "react-masonry-css";

   const breakpointColumns = {
     default: 4,
     1100: 3,
     700: 2,
     500: 1,
   };

   const MasonryLayout = ({ items }) => (
     <Masonry
       breakpointCols={breakpointColumns}
       className="my-masonry-grid"
       columnClassName="my-masonry-grid_column"
     >
       {items.map((item, index) => (
         <div key={index}>{item}</div>
       ))}
     </Masonry>
   );

   export default MasonryLayout;
   ```

---

## 4. Install React Icons

1. Install React Icons:

   ```bash
   npm install react-icons
   ```

2. Use icons in your components:

   ```javascript
   import { FaBeer } from "react-icons/fa";

   const IconExample = () => (
     <div>
       <h3> Let’s grab a <FaBeer />!</h3>
     </div>
   );

   export default IconExample;
   ```

---

## 5. Install and Configure Bootstrap

1. Add Bootstrap as a dependency:

   ```bash
   npm install bootstrap
   ```

2. Import Bootstrap CSS in your `src/main.jsx` or `src/index.js` file:

   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```

3. Use Bootstrap classes in your components:

---

## 6. Run the Project

Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173` by default.

---

## Additional Notes

- **Hot Module Replacement (HMR)** is enabled by default with Vite for a seamless development experience.
- Tailwind CSS and Bootstrap can be used together. However, be mindful of potential class conflicts.
- Masonry provides a flexible grid layout, ideal for image galleries or card collections.

---

## Conclusion

You’ve successfully set up a project using Vite, Tailwind CSS, Masonry, React Icons, and Bootstrap. Customize your app further by exploring the respective documentation for each tool.

