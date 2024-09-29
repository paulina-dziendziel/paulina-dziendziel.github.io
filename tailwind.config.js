/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          }
        }
      }
    },
    container: {
      center: true,
      padding: '4rem'
    },
    // gridTemplateColumns: {
    //   gallery: 'repeat(2, minmax(250px, 1fr))'
    // }
  },
  plugins: [
  ],
}
export default config