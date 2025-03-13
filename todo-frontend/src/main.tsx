
import { createRoot } from "react-dom/client"; // Import createRoot
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

// Find the root element
const container = document.getElementById("root");

// Ensure the root element exists
if (container) {
  // Create a root
  const root = createRoot(container);

  // Render the app
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root element not found!");
}