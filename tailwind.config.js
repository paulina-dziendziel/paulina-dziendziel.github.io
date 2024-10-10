/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        'h': '3 / 2',
        'v': '2 / 3'
      },
      colors: {
        'orange-25': '#FFFDFA'
      },
      maxWidth: {
        'screen': '100vw',
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