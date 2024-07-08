/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'verdigris': '#3AA39F',
        'mikado-yellow': '#FFC41F',
        'imperial-red': '#E14B4B',
        'space-cadet': '#17183B',
        'cool-grey': '#A2A3B1',
        'french-grey': '#D1D1D8',
      },
      fontSize: {
        'headline-large': ['44px', {
          lineHeight: '56px',
          fontWeight: '700',
        }],
        'headline-medium': ['32px', {
          lineHeight: '44px',
          fontWeight: '700',
        }],
        'headline-small': ['24px', {
          lineHeight: '36px',
          fontWeight: '700',
        }],
        'headline-extrasmall': ['8px', {
          lineHeight: '10px',
          fontWeight: '700',
        }],
        'product-card': ['18px', {
          lineHeight: '27px',
          fontWeight: '700',
        }],
        'specials-large': ['28px', {
          lineHeight: '42px',
          fontWeight: '700',
        }],
        'specials-medium': ['16px', {
          lineHeight: '24px',
          fontWeight: '700',
        }],
        'specials-small': ['14px', {
          lineHeight: '22px',
          fontWeight: '300',
        }],
        
        'title-large': ['34px', { 
          lineHeight: '40px',
          fontWeight: '600'
         }],
        'title-medium': ['24px', {
          lineHeight: '32px',
          fontWeight: '600'
         }],
        'title-small': ['20px', { 
          lineHeight: '24px',
          fontWeight: '600'
         }],
        'label-large': ['20px', { 
          lineHeight: '24px',
          fontWeight: '600'
         }],
        'label-medium': ['16px', { 
          lineHeight: '20px',
          fontWeight: '600'
         }],
        'label-small': ['14px', { 
          lineHeight: '16px',
          fontWeight: '600' 
        }],
        'body-large': ['16px', { 
          lineHeight: '24px',
          fontWeight: '400'
         }],
        'body-medium': ['14px', { 
          lineHeight: '20px',
          fontWeight: '400' }],
        'body-small': ['12px', { 
          lineHeight: '18px',
          fontWeight: '400'
         }],
         'blog': ['24px', { 
          lineHeight: '36px',
          fontWeight: '400'
         }],
         'blog-medium': ['16px', { 
          lineHeight: '22px',
          fontWeight: '300'
         }],
         
         
      },
    },
  },
  plugins: [

  ],
}

