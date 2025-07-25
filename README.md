# XML App

A modern React application with a vertical navbar and tools interface, built with Vite.

## Features

- **Vertical Navigation Bar**: Clean, modern sidebar with navigation tabs
- **Tools Tab**: Dedicated space for XML tools and utilities
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── Layout.jsx      # Main layout with sidebar navigation
│   └── Layout.css      # Styles for the layout component
├── Pages/              # Page components
│   ├── Home.jsx        # Home page component
│   ├── Home.css        # Home page styles
│   ├── Tools.jsx       # Tools page component
│   └── Tools.css       # Tools page styles
├── Routes/             # Routing logic
│   └── AppRoutes.jsx   # Route handling component
├── assets/             # Static assets
├── App.jsx             # Main app component
├── App.css             # Global app styles
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Navigation

The app includes the following navigation tabs:

- **🏠 Home**: Welcome page with app overview
- **🔧 Tools**: Tools interface with open workspace
- **ℹ️ About**: Information about the application
- **📧 Contact**: Contact information

## Tools Interface

The Tools page features:

- **Tool Cards**: Grid layout of available tools
- **Add Tool**: Option to add new tools
- **Workspace Area**: Open space for tool display
- **Responsive Grid**: Adapts to different screen sizes

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL

## Development

- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Lint**: `npm run lint`

## Technologies Used

- React 19
- Vite
- CSS3 with modern features
- Responsive design principles

## Customization

### Adding New Tools

1. Create a new tool component in the `Components/` directory
2. Add the tool to the Tools page grid
3. Implement the tool functionality in the workspace area

### Styling

The app uses a consistent color scheme:
- Primary: `#667eea` to `#764ba2` gradient
- Background: `#f8f9fa`
- Text: `#333` for headings, `#666` for body text

### Adding New Pages

1. Create a new page component in the `Pages/` directory
2. Add the page to the navigation items in `Layout.jsx`
3. Add the route in `AppRoutes.jsx`
4. Create corresponding CSS file for styling
#   x m l - p a r s e r  
 