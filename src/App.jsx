import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage"; 
import CategoryPage from "./pages/CategoryPage";
import SeriePage from "./pages/SeriePage";
//import SerieFormPage from "./pages/SerieFormPage";
//import CategoryFormPage from "./pages/CategoryFormPage";
import CategoryFormPage from "./pages/category/CategoryFormPage";
//import CategoryFormPage from "./pages/CategoryFormPage";
import CategoryEditFormPage from "./pages/category/CategoryEditFormPage";
import SerieFormPage from "./pages/series/SerieFormPage";
import SerieEditFormPage from "./pages/series/SerieEditFormPage";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/series" element={<SeriePage />} />
        <Route path="/series/edit/:idserie" element={<SerieFormPage />} />
        <Route path="/categories/edit/:idcategoria" element={<CategoryFormPage />} />
        <Route path="/categories/new" element={<CategoryFormPage />} />
        <Route path="/categories/edit/:id" element={<CategoryEditFormPage />}/>
        <Route path="/series/new" element={<SerieFormPage />} />
        <Route path="/series/edit/:id" element={<SerieEditFormPage />}/>
      </Routes>
    </BrowserRouter>
    );
}
export default App;
