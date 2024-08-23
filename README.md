# E-commerce Dashboard

## Overview

This project is a modern e-commerce dashboard built with React, TypeScript, and various other technologies. It provides a comprehensive interface for managing products, viewing orders, and handling customer interactions in an e-commerce setting.

MEDIUM link [here](https://medium.com/@tech-adventurer/mastering-react-a-senior-developer-s-best-practices-framework-%EF%B8%8F-6ea5a41292ae?sk=64e5dbb64c2c2c70a7e23ec7677296cb)

## Features

- Product management (listing, adding, editing, deleting)
- Shopping cart functionality
- Checkout process
- Order history
- User authentication (if implemented)
- Responsive design for various screen sizes

## Technologies Used

- React
- TypeScript
- Zustand (for state management)
- React Query (for data fetching and caching)
- Zod (for schema validation)
- Tailwind CSS (for styling)
- shadcn/ui (for UI components)
- Vite (as build tool)
- json-server (for mock backend)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/e-commerce-dashboard.git
   cd e-commerce-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or if you're using yarn:
   ```
   yarn
   ```

3. Start the mock backend server:
   ```
   npx json-server --watch db.json --port 3001
   ```

4. Start the development server:
   ```
   npm run dev
   ```
   or with yarn:
   ```
   yarn dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure

```
src/
├── features/
│   ├── products/
│   ├── cart/
│   ├── checkout/
│   └── ...
├── common/
│   ├── components/
│   ├── hooks/
│   └── utils/
├── pages/
├── styles/
└── App.tsx
```

## Available Scripts

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Query](https://react-query.tanstack.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Contact

Leandro M. F. Machado - fahurleandro@gmail.com

Project Link: [https://github.com/your-username/e-commerce-dashboard](https://github.com/your-username/e-commerce-dashboard)
