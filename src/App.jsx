import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";
import ContextProvider from "./context/ContextApp";
function App() {
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
