# React Learning Project - Job Opening Cards

A learning project built while mastering React concepts including components, props, state management, and component composition. This project demonstrates building reusable card components to display job openings.

## 📚 Learning Goals

This project was created to practice:

- **React Components**: Building reusable functional components
- **Props**: Passing data between parent and child components
- **Component Composition**: Combining smaller components to build complex UIs
- **Styling**: Using CSS with React components
- **UI Libraries**: Integrating lucide-react icons for polished interfaces

## 🎯 Features

- Reusable `Card` component for displaying job openings
- Dynamic rendering of multiple cards using props
- Icon integration with lucide-react
- Responsive card layout
- Clean and organized component structure

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:

```bash
cd proj1
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will open in your browser at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Application styles
├── main.jsx             # Entry point
├── index.css            # Global styles
├── components/
│   └── Card.jsx         # Reusable card component
└── assets/
    └── logos/           # Project assets
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## 📦 Dependencies

- **React**: ^19.2.6 - JavaScript library for building UIs
- **React DOM**: ^19.2.6 - React package for DOM rendering
- **Lucide React**: ^1.17.0 - Icon library for React
- **Vite**: ^8.0.12 - Frontend build tool

## 🎨 Screenshot (Job Openings Board)

![Job Opening Cards](src/screenshots/job%20opening%20cards.png)

_A preview of the job opening cards component in action_

## 🔄 Key Concepts Practiced

### Components

The `Card` component is a reusable building block that accepts props to display different job information.

### Props

Job data is passed to Card components as props, demonstrating one-way data flow in React.

### Composition

Multiple Card components are composed together to create the job listings view.

## 💡 Next Steps for Learning

- Add state management with `useState` for interactive features
- Implement filtering or search functionality
- Add form handling for new job entries
- Explore context API or state management libraries
- Add routing with React Router
- Write unit tests with Jest and React Testing Library

## 📝 Notes

This is a learning project created while exploring React fundamentals. It serves as a foundation for understanding core React concepts that can be applied to larger applications.

---

Happy Learning! 🚀
