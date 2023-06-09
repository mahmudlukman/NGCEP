import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { themeSettings } from './theme'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './scenes/dashboard'
import Layout from './scenes/layout'
import Login from './scenes/login'
import Register from './scenes/register'
import Products from "./scenes/products"
import Customers from "./scenes/customers"
import AddProduct from "./scenes/addProduct"
import Geography from './scenes/geography'
import Overview from './scenes/overview'
import Transactions from "./scenes/transactions"
import Daily from "./scenes/daily"
import Monthly from "./scenes/monthly"
import Breakdown from "./scenes/breakdown"

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/generators" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
