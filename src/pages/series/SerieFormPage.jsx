import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import HeaderComponent from "../../components/HeaderComponent";


const initData = {
    id: '',
    name: '',
    release_date: '',
    rating: 0,
    category: '', 
}

function SerieFormPage(){
    
    const urlApi = 'http://localhost:8000/serie';
    const navigate = useNavigate();
    const [data, setData] = useState(initData);

    const onChangeName = (e) => {
        const nData = {...data, name: e.target.value};
        setData(nData);
    };

    const onChangeReleaseDate = (e) => {
        const nData = {...data, release_date: e.target.value};
        setData(nData);
    };

    const onChangeRating = (e) => {
        const nData = {...data, rating: e.target.value};
        setData(nData);
    };

    const onChangeCategory = (e) => {
        const nData = {...data, category: e.target.value};
        setData(nData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(urlApi, data); 
        navigate("/series"); 
    };

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Nueva - Serie</h3>
                </div>
                <form onSubmit={handleSubmit} className="row">
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            onChange={onChangeName} 
                            className="form-control" 
                            value={data.name} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputReleaseDate" className="form-label">Fecha de lanzamiento</label>
                        <input 
                            type="date" 
                            onChange={onChangeReleaseDate} 
                            className="form-control" 
                            value={data.release_date} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputRating" className="form-label">Calificación</label>
                        <input 
                            type="number" 
                            onChange={onChangeRating} 
                            className="form-control" 
                            value={data.rating} 
                            required 
                            min="0" max="5" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputCategory" className="form-label">Categoría</label>
                        <select 
                            onChange={onChangeCategory} 
                            className="form-control" 
                            value={data.category} 
                            required
                        >
                            <option value="">Seleccione una categoría</option>
                            <option value="horror">Horror</option>
                            <option value="comedy">Comedy</option>
                            <option value="action">Action</option>
                            <option value="drama">Drama</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary me-2">Guardar</button>
                        <Link className="btn btn-secondary" to="/series">Cancelar</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SerieFormPage;
