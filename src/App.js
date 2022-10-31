import * as React from "react";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import { Dashboard } from './pages/dashboard'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { ProductPage } from './pages/pdp/pdp.jsx'
import { Form } from './pages/formulario'
import {Home} from './pages/home'

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
            <Route path="/product" element={<ProductPage />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard />
              }
            />
            <Route
              path="/formulario"
              element={
                // <RequireAuth>
                <Form />
                // </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}







