# React Native Coding Assignment

This repository contains solutions to the three assignments:

1. Calculator
2. Navbar Component
3. Two Sum II

## Prerequisites

- Node.js
- npm or yarn
- Expo (This is built with Expo)
- Android Studio or Xcode (for running on simulators)

## Getting Started

1. Clone this repository:

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the app:

```bash
# For Android
npm run android
# or
yarn android

# For iOS
npm run ios
# or
yarn ios

# For Web
npm run web
# or
yarn web
```

## Project Structure

- `/pages`
  - `/answers`
    - `calculator.tsx` - Calculator
    - `navbar.tsx` - Navbar component
    - `question3.ts` - Two Sum II

## Testing React Native

You can change the components to switch between the `Calculator` and `Navbar` components by add/remove the comment in the code

## Testing for question3

To test just the algorithm implementation without the React Native app:

```bash
npx ts-node algorithms/question3.ts
```
