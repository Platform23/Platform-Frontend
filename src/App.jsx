import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Network from "./pages/Network";
import NetworkDetail from "./pages/NetworkDetail";
import Layout from "./Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EmailVerification from "./pages/EmailVerification";
import ForgotPassword from "./pages/ForgotPassword";
import EmailSentConfirmation from "./pages/EmailSentConfirmation"
import ResetPassword from "./pages/ResetPassword";
import PasswordResetSuccess from "./pages/PasswordResetSuccess";
import Profile from "./pages/Profile";
import Welcome from "./pages/Welcome";
import { AuthProvider } from "./hooks/AuthProvider";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="connexion" element={<SignIn />} />
        <Route path="inscription" element={<SignUp />} />
        <Route path="bienvenue" element={<Welcome />} />
        <Route path='verifier-email/:token' element={<EmailVerification />} />

        <Route path="mot-de-passe-oublie" element={<ForgotPassword />} />
        <Route path="confirmation-envoi-email" element={<EmailSentConfirmation />} />
        <Route path='reinitialiser-mot-de-passe/:token' element={<ResetPassword />} />
        <Route path='mot-de-passe-reinitialise-succes' element={<PasswordResetSuccess />} />

        <Route path="/" element={<Layout />}>
          <Route index element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>}
          />

          <Route path="reseaux"
            element={
              <PrivateRoute>
                <Network />
              </PrivateRoute>}
          />

          <Route path="profil/:userId"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>}
          />

          <Route path="reseaux/:uuid"
            element={
              <PrivateRoute>
                <NetworkDetail />
              </PrivateRoute>}
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
