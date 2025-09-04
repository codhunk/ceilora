// tailwind.config.js (updated theme section)
module.exports = {
  content: [
    "./src/pages/home.jsx",
    "./src/pages/about_us.jsx",
    "./src/pages/services.jsx",
    "./src/pages/client_gallery.jsx",
    "./src/pages/contact_us.jsx",
    "./src/pages/project_details.jsx",
    "./src/components/navbar/navbar.jsx",
    "./src/components/footer/footer.jsx",
    "./src/index.js",
    "./src/App.js",
  
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' will be your default sans-serif font
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        // 'serif' for headings
        'serif': ['"Playfair Display"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      colors: {
        // You can add your brand colors here
        'indigo': { // Example default indigo shades (Tailwind has these by default, but you can override)
          '50': '#eef2ff',
          '100': '#e0e7ff',
          // ... up to 900
          '600': '#4f46e5',
          '700': '#4338ca',
        },
        // 'primary': '#YOUR_PRIMARY_COLOR',
        // 'secondary': '#YOUR_SECONDARY_COLOR',
        // 'accent': '#YOUR_ACCENT_COLOR',
      }
    },
  },
  plugins: [],
}