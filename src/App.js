import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavbar from "./components/MainNavbar";
import Dashboard from "./pages/dashboard_page/Dashboard";
import CreateUser from "./pages/create_page/CreateUser";
import UserProfile from "./pages/profile_page/UserProfile";
import EditUser from "./pages/edit_page/EditUser";
import UserNotFound from "./components/UserNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/create" Component={CreateUser} />
        <Route path="/profile" Component={UserProfile} />
        <Route path="/edit" Component={EditUser} />
        <Route path="*" Component={UserNotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
