# Koreana Restaurant Web Application

![Koreana Logo](./public/restaurant_koreana_logo.svg)

A modern, responsive web application for **Koreana Restaurant**, a family-owned establishment serving authentic Korean cuisine in San Antonio for over 25 years. This application provides customers with a seamless experience to browse the menu, view real-time reviews, and explore the restaurant's offerings.

## 🚀 Features

- **Dynamic & Numbered Menu:** A fully categorized and numbered menu system (1-52) for easy reference and ordering.
- **Real-time Google Reviews:** Integrated Google Customer Reviews fetched dynamically, featuring a responsive carousel and star ratings that handle partial scores (e.g., 4.7 stars).
- **Popular Items Carousel:** An interactive "coverflow" carousel showcasing the restaurant's most popular dishes with high-quality imagery.
- **Image Gallery:** A comprehensive photo gallery featuring the restaurant's atmosphere and signature dishes.
- **Responsive Navigation:** Optimized for all devices with a functional mobile hamburger menu and brand-aligned active states.
- **Contact & Location:** Embedded Google Maps integration and clear contact information including business hours and location.
- **Modern UI/UX:** Built with professional animations (AOS), smooth transitions, and a clean aesthetic using the restaurant's brand colors.

## 🛠 Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/) & [AOS](https://michalsnik.github.io/aos/)
- **Carousels:** [Swiper 11+](https://swiperjs.com/)
- **Data Fetching:** [Axios](https://axios-http.com/)
- **Email Templates:** [@react-email/components](https://react.email/)

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ericdwkim/koreana_restaurant_webapp.git
   cd koreana_restaurant_webapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and add your Google API credentials:

```env
GOOGLE_API_KEY=your_google_api_key
PLACE_ID=your_google_place_id
```

### Running Locally

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗 Project Structure

- `app/`: Next.js App Router pages (About, Contact, Gallery, Menu).
- `components/`: Reusable UI components (Navbar, Footer, Carousels, Reviews).
- `lib/`: Application data (menuData), navigation links, and content configurations.
- `public/`: Static assets (Images, SVGs).
- `app/styles/`: Global CSS and Tailwind directives.

## 📜 Scripts

- `npm run dev`: Starts the development server with hot-reloading.
- `npm run build`: Generates an optimized production build using Next.js 16.
- `npm run start`: Starts the production server.
- `npm run lint`: Checks for code quality and accessibility issues.

## 🚀 Deployment

This project is optimized for deployment on **Vercel**. 
1. Push your changes to GitHub.
2. Connect your repository to Vercel.
3. Add your Environment Variables (`GOOGLE_API_KEY`, `PLACE_ID`) in the Vercel project settings.
4. Deploy!

---

© 2023 Koreana Restaurant. All rights reserved.
