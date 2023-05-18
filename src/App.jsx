import React, { useContext } from "react"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { userInputs, productInputs } from "./formSource";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext/darkModeContext";
import { AuthContext } from "./context/AuthContext/AuthContext";


function App() {

  const {darkMode} = useContext(DarkModeContext)

  const { currentUser }= useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login" />
  }

  console.log(currentUser);

  
  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
     <Routes>
      <Route path="/">
        <Route path="login" element={<Login />} /> 
        <Route index element={<RequireAuth><Home /></RequireAuth>} /> 
        <Route path="users">
          <Route index element={<RequireAuth><List /></RequireAuth>} />
          <Route path=":userId" element={<RequireAuth><Single/></RequireAuth>} />
          <Route path="new" element={<RequireAuth><New inputs = {userInputs} title="Add New User"/></RequireAuth>} />
          </Route>     
          <Route path="products">
          <Route index element={<RequireAuth><List /></RequireAuth>} />
          <Route path=":productId" element={<RequireAuth><Single/></RequireAuth>} />
          <Route path="new" element={<RequireAuth><New inputs = {productInputs} title ="Add New Product" /></RequireAuth>} />
          </Route>                
      </Route>                     
     </Routes>
    </BrowserRouter>
    </div>
  )
} 


export default App


