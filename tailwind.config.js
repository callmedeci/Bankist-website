/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '*.html',
    './src/**/*.js'
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkGreen: '#5ec576',
        mediumGreen: '#b0e48b',
        lightGreen: '#d1e9d7',
        mediumYellow: '#fff6ce',
        lightYellow: '#fff6ce',
        darkYellow: '#ffcb03',
        stone: '#f3f3f3',
      },
      gradientColorStops: {
        darkGreen: '#5ec576',
        mediumGreen: '#b0e48b',
        lightGreen: '#d1e9d7',
        mediumYellow: '#fff6ce',
        lightYellow: '#fff6ce',
        darkYellow: '#ffcb03'
      },
      textColor: {
        dark: '#333',
        mediumDark: '#444444',
        darkGreen: '#5ec576',
        lightGreen: '#d1e9d7',
        mediumYellow: '#fff6ce',
        lightYellow: '#fff6ce',
        darkYellow: '#ffcb03'
      },
      fontFamily: {
        poppins: 'Poppins',
        sansSerif: 'sans-serif',
      },
      fontSize: {
        'h1': ['5.5rem', {
          lineHeight: 1.35,
        }],
        "h2": ['3.25rem', {
          lineHeight: 1.5,
        }],
        'label': ['1.7rem', {
          fontWeight: 500,
        }],
        '6.5xl': ['4.5rem', {
          lineHeight: '1.35',
        }],
        'xxl': '2rem',
        '2xl-fix': '1.5rem',
        'nav-font': ['1.7rem', {
          fontWeight: 400
        }],
        '4xxl': ['4rem', {
          lineHeight: 1.3,
          fontWeight: 500,
        }],
        'noraml-base': '63.5%',
        'title': ['2rem', { lineHeight: 1.9, fontWeight: 300 }],
        'describtion': ['1.5rem', { fontWeight: 300 }],
      },
      width: {
        '115': '460px'
      },
      fill: {
        dark: '#333',
        mediumDark: '#444444',
        darkGreen: '#5ec576',
        lightGreen: '#d1e9d7',
        mediumYellow: '#fff6ce',
        lightYellow: '#fff6ce',
        darkYellow: '#ffcb03'
      },
      borderColor: {
        darkGreen: '#5ec576',
        mediumGreen: '#b0e48b',
        lightGreen: '#d1e9d7',
        mediumYellow: '#fff6ce',
        lightYellow: '#fff6ce',
        darkYellow: '#ffcb03',
        stone: '#f3f3f3',
      },
      ringColor: {
        darkGreen: '#5ec576',
        mediumGreen: '#b0e48b',
        lightGreen: '#d1e9d7',
        mediumYellow: '#fff6ce',
        lightYellow: '#fff6ce',
        darkYellow: '#ffcb03',
        stone: '#f3f3f3',
      }
    },
  },
  plugins: [],
}

