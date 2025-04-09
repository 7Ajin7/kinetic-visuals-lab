import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        accent1: '#FF0000', // Red accent
        accent2: '#00BCD4', // Teal accent
        accent3: '#FFFFFF', // White accent
        darkBg: '#000000', // Pure black
        darkBg2: '#0D0C0C', // Dark gray
        lightBg: '#FFFFFF', // Pure white
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        'slide-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'text-reveal': {
          '0%': { 
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'scanner': {
          '0%': { 
            transform: 'translateY(-100%)',
            opacity: '0.3'
          },
          '50%': {
            opacity: '0.7'
          },
          '100%': { 
            transform: 'translateY(100%)',
            opacity: '0.3'
          }
        },
        'scan-horizontal': {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0.6'
          },
          '50%': {
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100%)',
            opacity: '0.6'
          }
        },
        'glitch': {
          '0%': {
            clip: 'rect(42px, 9999px, 44px, 0)'
          },
          '5%': {
            clip: 'rect(12px, 9999px, 59px, 0)'
          },
          '10%': {
            clip: 'rect(48px, 9999px, 29px, 0)'
          },
          '15%': {
            clip: 'rect(42px, 9999px, 73px, 0)'
          },
          '20%': {
            clip: 'rect(63px, 9999px, 27px, 0)'
          },
          '25%': {
            clip: 'rect(34px, 9999px, 55px, 0)'
          },
          '30%': {
            clip: 'rect(86px, 9999px, 73px, 0)'
          },
          '35%': {
            clip: 'rect(20px, 9999px, 20px, 0)'
          },
          '40%': {
            clip: 'rect(26px, 9999px, 60px, 0)'
          },
          '45%': {
            clip: 'rect(25px, 9999px, 66px, 0)'
          },
          '50%': {
            clip: 'rect(57px, 9999px, 98px, 0)'
          },
          '55%': {
            clip: 'rect(5px, 9999px, 46px, 0)'
          },
          '60%': {
            clip: 'rect(82px, 9999px, 31px, 0)'
          },
          '65%': {
            clip: 'rect(54px, 9999px, 27px, 0)'
          },
          '70%': {
            clip: 'rect(28px, 9999px, 99px, 0)'
          },
          '75%': {
            clip: 'rect(45px, 9999px, 69px, 0)'
          },
          '80%': {
            clip: 'rect(23px, 9999px, 85px, 0)'
          },
          '85%': {
            clip: 'rect(54px, 9999px, 84px, 0)'
          },
          '90%': {
            clip: 'rect(45px, 9999px, 47px, 0)'
          },
          '95%': {
            clip: 'rect(37px, 9999px, 20px, 0)'
          },
          '100%': {
            clip: 'rect(4px, 9999px, 91px, 0)'
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-out': 'fade-out 0.5s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 15s linear infinite',
        'text-reveal': 'text-reveal 0.8s ease forwards',
        'scanner': 'scanner 4s linear infinite',
        'scan-horizontal': 'scan-horizontal 3s linear infinite',
        'glitch': 'glitch 1s infinite linear alternate-reverse',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
