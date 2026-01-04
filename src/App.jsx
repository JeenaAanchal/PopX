import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileLayout from "./layouts/MobileLayout";
import Landing from "./pages/Landing";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <Router>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-account" element={<CreateAccount />} />
           <Route path="/login" element={<Login />} />
           <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </MobileLayout>
    </Router>
  );
}

export default App;
