# Bitcoin Mining Profitability Calculator

A React Native mobile application that helps users calculate the profitability of their Bitcoin mining operations by considering various factors such as hash rate, power consumption, electricity costs, and initial investment.

## Features

- Calculate daily, monthly, and yearly mining profitability
- Input validation for all parameters
- Real-time error feedback
- Detailed results including:
  - Revenue in USD and BTC
  - Operating costs
  - Net profit
  - Break-even timeline
  - Cost to mine 1 BTC

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native development environment setup
- iOS Simulator or Android Emulator

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/bitcoin-mining-calculator.git
```

2. Install dependencies

```bash
cd bitcoin-mining-calculator
npm install
# or
yarn install
```

3. Start the Metro bundler

```bash
npm start
```

4. Run the application

```bash
# For iOS
npm run ios
```

## Technology Stack

### Core Technologies

- React Native (v0.72.5)
- TypeScript (v4.8.4)

### Navigation

- @react-navigation/native (v6.1.18)
- @react-navigation/native-stack (v6.11.0)
- @react-navigation/stack (v6.4.1)

### UI Components

- react-native-gesture-handler
- react-native-safe-area-context
- react-native-screens
- @react-native-masked-view/masked-view

### Development Tools

- Metro bundler
- Prettier for code formatting
- ESLint for code linting
- Jest for testing

## Project Structure

```
src/
├── components/         # Reusable UI components
├── screens/           # Screen components
├── services/          # API and business logic
├── styles/           # Global styles and themes
├── hooks/            # Custom React hooks
├── navigation/       # Navigation configuration
└── utils/            # Utility functions
```

## Development Approach

### UI/UX Design

- Dark theme implementation with a focus on readability
- Consistent styling using global theme configuration
- Responsive layout supporting various screen sizes
- Clear error messaging for input validation

### State Management

- React's built-in useState for local state management
- Custom hooks for navigation and business logic

### API Integration

- RESTful API communication using fetch
- Proper error handling and loading states
- Type-safe API responses using TypeScript interfaces

### Code Quality

- Strict TypeScript configuration for type safety
- ESLint and Prettier for code consistency
- Component-based architecture for reusability
- Jest setup for unit testing

## Environment Setup

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_API_LINK=http://localhost:8000
```

For Android development, update the API link in your `.env.development`:

```env
NEXT_PUBLIC_API_LINK=http://10.0.2.2:8000
```

## Available Scripts

```bash
# Start the development server
npm start

# Run the iOS simulator
npm run ios
```
