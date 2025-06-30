import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { useEffect } from "react";
import "rsuite/dist/rsuite.min.css";
import { ModeProvider } from "./theme/ModeContext";
import { ThemeProvider } from "./theme/ThemeProvider";
function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
  }, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <ModeProvider>
          <ThemeProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ThemeProvider>
        </ModeProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
