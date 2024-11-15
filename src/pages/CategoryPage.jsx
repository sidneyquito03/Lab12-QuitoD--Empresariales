import HeaderComponent from "../components/HeaderComponent";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react"; 
import axios from "axios";
import { Link} from "react-router-dom";

function CategoryPage(){
    const urlApi = "http://localhost:8000/series/api/v1/categories/";
    const [categories, setCategories] = useState([]);
    /* 
    const categories = [
        {cod:1, nom:"Horror"},
        {cod:2, nom:"comedy"},
        {cod:3, nom:"Action"},
        {cod:4, nom:"Drama"},
      ];*/

    const navigate = useNavigate();

     const handleEdit = async(id) => {
        navigate(`/categories/edit/${id}`);
    }
    
   /*const handleEdit = (cod) => {
        navigate(`/categories/edit/${cod}`);
    }*/

    //TRABAJADO EN EL LAB12 
    const loadData = async()=> {
        const resp = await axios.get(urlApi);
        console.log(resp.data);
        setCategories(resp.data);
    };

    useEffect(()=>{
        loadData();
    },[]);

    const handleDelete = async (id) => {
        if (window.confirm('¿Está seguro de eliminar este registro?')) { 
            await axios.delete(`${urlApi}${id}/`);
            console.log(response.data);
            const nLista = categories.filter(item => item.id !== id);
            setCategories(nLista);
        }  
    };
      return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                <div className="d-flex justify-content-between">
                        <h3>Categorías</h3>
                        <div>
                            <Link className="btn btn-primary" to="/categories/new">Nuevo</Link>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th className="text-center">Category</th>
                            <th className="text-center">Id</th>
                            <th className="text-center" style={{width: "100px"}}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td className="text-center">{item.id}</td>
                                <td className="text-center">
                                <button onClick={() => handleEdit(item.id)} className="btn btn-secondary me-2 btn-sm">
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
      )
}

export default CategoryPage
