# GymJim - Fitness Center Website

A modern, responsive web application for a fitness center that allows users to browse programs, trainers, book sessions, and purchase memberships.

## 📋 Overview

GymJim is a comprehensive fitness center website built with React and Bootstrap. The application provides users with a seamless experience to explore various fitness programs, meet professional trainers, book sessions, and sign up for memberships. The interface is intuitive and responsive, ensuring a great user experience across devices.

## ✨ Features

- **Home Page**: Engaging carousel showcasing the gym's offerings and an about section
- **Programs Section**: Browse different fitness programs including CrossFit, Yoga, Spinning, and Pilates
- **Trainers Profiles**: Meet the professional trainers with detailed information and availability
- **Booking System**: Interactive calendar for booking program sessions and personal trainer appointments
- **Membership Plans**: Various membership options with different pricing tiers
- **Contact Form**: Easy-to-use contact form for inquiries
- **Payment Processing**: Secure payment processing system with options to pay now or on arrival

## 🛠️ Technologies Used

- **React**: Frontend library for building the user interface
- **Bootstrap 5**: CSS framework for responsive design
- **React Router**: For client-side routing
- **FullCalendar**: For calendar and scheduling functionality
- **Bootstrap Icons**: For UI icons
- **Vite**: Build tool and development server
- **Sass**: For custom styling

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ui-ux-2
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── assets/         # Static assets like images
├── components/     # Reusable UI components
├── pages/          # Page components for different routes
├── sass/           # Sass styling files
├── utils/          # Utility functions and data
├── App.jsx         # Main App component
└── main.jsx        # Application entry point
```

### Key Components

- **NavBar**: Main navigation component
- **Footer**: Site footer with contact information
- **BookingInfoForm**: Form for booking sessions
- **EventItem**: Calendar event display component
- **About**: About section for the gym

### Pages

- **HomePage**: Landing page with carousel and about section
- **ProgramsPage**: Overview of all programs offered
- **ProgramPage**: Detailed view of a specific program
- **TrainersPage**: Overview of all trainers
- **TrainerPage**: Detailed profile of a specific trainer
- **BookingPage**: Interface for booking sessions
- **MembershipsPage**: Display of membership options
- **PaymentPage**: Payment processing
- **ContactPage**: Contact form and information

## 📱 Features Showcase

### Interactive Calendar

The website features a fully interactive calendar system that allows users to:
- View available program sessions
- Check trainer availability
- Book sessions with real-time availability updates

### Membership System

Users can:
- Browse different membership tiers
- Compare features and pricing
- Subscribe to a membership plan

### Responsive Design

The site is fully responsive, providing an optimal viewing experience across a wide range of devices, from desktop computers to mobile phones.

## 🔒 Environment Variables

No environment variables are required for basic development. The project uses mock data for demonstration purposes.

## 👥 Contributors

- Tristan Robichaud
- Zachary Shewan

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Note: This project was created as part of the UI/UX course assignment.*
