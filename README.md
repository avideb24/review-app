# Review App

A modern React-based review management application that allows users to create, edit, delete, and search through shop reviews. Built with React 19, Vite, and Tailwind CSS.

## 🚀 Features

- **Review Management**: Create, edit, and delete shop reviews
- **Search & Filter**: Search reviews by shop name
- **Local Storage**: Persist reviews in browser localStorage using Context API
- **Responsive Design**: Mobile-first responsive UI
- **Modern UI**: Beautiful interface with Tailwind CSS
- **Interactive Elements**: SweetAlert2 for confirmations, Lottie animations
- **Statistics**: Visual charts and stats display

## 📁 Project Structure

```
review-app/
├── public/                     # Static assets
├── src/                       # Source code
│   ├── assets/                # Project assets
│   ├── components/            # Reusable components
│   │   ├── layout/           # Layout components
│   │   ├── page-com/         # Page-specific components
│   │   └── reusuable/        # Reusable components
│   ├── layout/               # Layout components
│   ├── pages/                # Page components
│   ├── provider/             # Context API providers
│   │   └── ReviewProvider.jsx # Review management context
│   ├── routes/               # Routing configuration
│   ├── styles/               # CSS styles
│   └── main.jsx              # Application entry point
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🛠️ Technologies & Libraries

### Core Dependencies
- **React** (^19.1.0) - UI library
- **React Router DOM** (^7.6.0) - Client-side routing
- **Vite** (^6.3.5) - Build tool and dev server

### UI & Styling
- **Tailwind CSS** (^3.4.17) - Utility-first CSS framework
- **Lucide React** (^0.539.0) - Icon library
- **Lottie React** (^2.4.1) - Animation library

### Data Visualization
- **Recharts** (^3.1.2) - Chart library for statistics

### User Experience
- **SweetAlert2** (^11.22.3) - Beautiful alert dialogs
- **React Star Ratings** (^2.3.0) - Star rating component

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
   ```

3. **Start the development server**
   ```bash
   npm run dev
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

The application uses browser localStorage with a React Context API (`ReviewProvider`) to persist review data. All reviews are automatically saved and will persist between browser sessions.

### ReviewProvider Context API

The app uses a centralized context for managing reviews:

```jsx
import { useReviews } from '../provider/ReviewProvider';

function MyComponent() {
  const {
    reviews,
    filteredReviews,
    addReview,
    updateReview,
    deleteReview,
    setSearchTerm
  } = useReviews();

  // Use these functions to manage reviews
}
```

**Key Features:**
- ✅ CRUD Operations (Add, Update, Delete)
- ✅ LocalStorage Persistence
- ✅ Search & Filtering
- ✅ Error Handling
- ✅ Performance Optimized

## 🎨 Styling

The project uses Tailwind CSS for styling with a custom configuration. The design is fully responsive and follows modern UI/UX principles.

## 📱 Browser Support

The application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

