import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import CustomSidebar from "./components/CustomSidebar";
import ItemsExporer from "./pages/ItemsExporer";
import ItemPage from "./pages/ItemPage";
import { ItemsContext } from "./context/ItemsContext";
import UserItem from "./pages/UserItem";
import AddForm from "./pages/AddForm";

function App() {
  const [user, setUser] = useState(false);
  const [items, setItems] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ItemsContext.Provider value={{ items, setItems }}>
        <BrowserRouter>
          {user ? <CustomSidebar /> : <div></div>}
          <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/items" element={<ItemsExporer />}></Route>
            <Route path="/items/:idItem" element={<ItemPage />}></Route>
            <Route path="/your-items" element={<UserItem />}></Route>
            <Route path="/addItem" element={<AddForm />}></Route>
          </Routes>
        </BrowserRouter>
      </ItemsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
