import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";
import ContextProvider from "./context/ContextApp";
import { Outlet } from "react-router-dom";
import { MenuNavigation } from "./components/MenuNavigation";
import { Header } from "./components/Header";
function App() {
  return (
    <ContextProvider>
      <MenuNavigation />
      <Header />
      <div className="ml-0 md:ml-20">

      <Outlet />
      </div>
    </ContextProvider>
  );
}

export default App;
