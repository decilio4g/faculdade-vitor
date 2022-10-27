import * as React from "react";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import { Home } from './pages/home'
import { Login } from './pages/login'
import { Register } from './pages/register'

import { RequireAuth } from './Auth/requireAuth'
import { AuthProvider } from './Auth/useAuth'
import { Layout } from './layout'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}







