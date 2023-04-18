# JESTER

Jester is your life Companion, he helps you with your daily activities

# STACK:

1. NEXTjs 13 - APP_DIR
   ref: https://beta.nextjs.org/docs/installation
2. TAILWINDcss
   ref: https://tailwindcss.com/docs/guides/
3. NEXT-THEMES
   ref: https://github.com/pacocoursey/next-themes
4. PLANETSCALE - Backend as Service - MySQL
   ref: https://planetscale.com/docs
5. PRISMA
   ref: https://www.prisma.io/docs/getting-started/quickstart

# Installs:

NEXTJS
npx create-next-app@latest --experimental-app

TAILWIND
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
@tailwind.config.js >> content: ["./src/**/*.{js,ts,jsx,tsx}", ],
@globals.css >> @tailwind base; @tailwind components; @tailwind utilities;
@page.tsx >> h1 className="text-3xl font-bold underline">Hello world! h1

NEXT-THEMES
npm install next-themes

PRISMA
npm install prisma --save-dev
npm i @prisma/client
npx prisma init --datasource-provider mysql
npx prisma db push
npx prisma generate
