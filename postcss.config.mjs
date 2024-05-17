/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Added autoprefixer as suggested by the docs
  },
};

export default config;