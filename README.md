# Review App

A modern React-based review management application that allows users to create, edit, delete, and search through shop reviews. Built with React 19, Vite, and Tailwind CSS.

## 🚀 Features

- **Review Management**: Create, edit, and delete shop reviews
- **Search & Filter**: Search reviews by shop name
- **Local Storage**: Persist reviews in browser localStorage
- **Responsive Design**: Mobile-first responsive UI
- **Modern UI**: Beautiful interface with Tailwind CSS
- **Interactive Elements**: SweetAlert2 for confirmations, Lottie animations
- **Statistics**: Visual charts and stats display

## 📁 Project Structure

```
review-app-new/
├── public/                     # Static assets
│   ├── shoes-*.avif           # Product images
│   ├── nike-just-do-it*.avif  # Brand images
│   └── vite.svg               # Vite logo
├── src/                       # Source code
│   ├── assets/                # Project assets
│   ├── components/            # Reusable components
│   │   ├── layout/           # Layout components
│   │   ├── page-com/         # Page-specific components
│   │   │   └── home/         # Home page components
│   │   │       ├── Hero.jsx  # Hero section
│   │   │       └── Stats.jsx # Statistics component
│   │   └── reusuable/        # Reusable components
│   │       ├── ReviewCard.jsx    # Review display card
│   │       ├── ReviewForm.jsx    # Review creation form
│   │       └── SearchFilter.jsx  # Search functionality
│   ├── layout/               # Layout components
│   │   └── Root.jsx          # Root layout
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Main home page
│   │   └── Error.jsx         # Error page
│   ├── routes/               # Routing configuration
│   │   └── Routes.jsx        # App routes
│   ├── styles/               # CSS styles
│   │   └── index.css         # Main stylesheet
│   └── main.jsx              # Application entry point
├── package.json              # Dependencies and scripts
├── package-lock.json         # Locked dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
└── .gitignore                # Git ignore rules
```

## 🛠️ Technologies & Libraries

### Core Dependencies
- **React** (^19.1.0) - UI library
- **React DOM** (^19.1.0) - React DOM rendering
- **React Router DOM** (^7.6.0) - Client-side routing

### UI & Styling
- **Tailwind CSS** (^3.4.17) - Utility-first CSS framework
- **PostCSS** (^8.5.3) - CSS processing
- **Autoprefixer** (^10.4.21) - CSS vendor prefixing

### UI Components & Icons
- **Lucide React** (^0.539.0) - Icon library
- **Lottie React** (^2.4.1) - Animation library

### Data Visualization
- **Recharts** (^3.1.2) - Chart library for statistics

### User Experience
- **SweetAlert2** (^11.22.3) - Beautiful alert dialogs
- **React Star Ratings** (^2.3.0) - Star rating component

### Development Tools
- **Vite** (^6.3.5) - Build tool and dev server
- **ESLint** (^9.25.0) - Code linting
- **@vitejs/plugin-react** (^4.4.1) - React plugin for Vite

### TypeScript Support
- **@types/react** (^19.1.2) - React TypeScript definitions
- **@types/react-dom** (^19.1.2) - React DOM TypeScript definitions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd review-app-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code linting

## 🎯 How to Use

1. **Add a Review**: Use the review form to add new shop reviews
2. **Search Reviews**: Use the search bar to filter reviews by shop name
3. **Edit Reviews**: Click the edit button on any review card
4. **Delete Reviews**: Click the delete button and confirm the action
5. **View Statistics**: Check the stats section for review analytics

## 💾 Data Persistence

The application uses browser localStorage to persist review data. All reviews are automatically saved and will persist between browser sessions.

## 🎨 Styling

The project uses Tailwind CSS for styling with a custom configuration. The design is fully responsive and follows modern UI/UX principles.

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **tailwind.config.js**: Tailwind CSS customization
- **postcss.config.js**: PostCSS plugins configuration
- **eslint.config.js**: ESLint rules and configuration

## 📱 Browser Support

The application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the repository.
