# Week Nº 23

## Step by step, line by line — becoming a Full Stack Developer in one year.

## Weather Application

### 📌 Features

- **Real-time weather search** - Get current weather data for any city worldwide using OpenWeatherMap API
- **Temperature unit toggle** - Switch between Celsius (°C) and Fahrenheit (°F) instantly
- **Detailed weather information** - Display temperature, feels like, humidity, and wind speed
- **Loading states** - Visual feedback while fetching data
- **Error handling** - User-friendly error messages that auto-dismiss after 3 seconds
- **Responsive design** - Clean, minimalist interface that works on all devices

### 🛠️ Technologies Used

- **React** - Component-based UI library
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features
- **OpenWeatherMap API** - Weather data provider
- **CSS3** - Styling with gradients and animations

### 🧠 Lessons Learned

- **API Integration** - How to make API calls using `fetch()` and handle responses
- **Environment Variables** - Securing API keys using `.env` files with Vite (`VITE_` prefix)
- **Async/Await** - Managing asynchronous operations with try/catch/finally blocks
- **State Management** - Understanding how React state updates asynchronously
- **Props Drilling** - Passing data through multiple component levels (App → Container → SearchForm/WeatherDisplay)
- **Conditional Rendering** - Showing/hiding UI elements based on state (`loading`, `error`, `data`)
- **Form Handling** - Using `onSubmit` on forms vs `onClick` on buttons
- **Error Handling** - Proper error management with user feedback and auto-dismissal
- **Component Architecture** - Organizing code into reusable, single-responsibility components
- **Event Prevention** - Using `e.preventDefault()` to avoid page reloads on form submission
- **State Synchronization** - Solving the problem of stale state by passing parameters directly instead of relying on asynchronous state updates
- **CSS Design** - Creating clean, minimalist interfaces with modern design patterns

### 🚀 Key Challenges Solved

1. **Asynchronous State Updates** - Learned that `setState` doesn't update immediately, solved by passing values as function parameters
2. **API Key Security** - Properly stored sensitive data in environment variables
3. **Error State Management** - Implemented temporary error messages that clear automatically
4. **Unit Conversion** - Handled metric/imperial system switching with proper API parameter changes
5. **Loading UX** - Added disabled states and loading indicators for better user experience