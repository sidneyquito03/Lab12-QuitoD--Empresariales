import HeaderComponent from "../components/HeaderComponent"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import '../assets/styles.css';

const initData = {
    cod:'',
    nom:'',
}

function CategoryFormPage() {

    const navigate = useNavigate();
        
    const gotoUrl = () => {
        navigate("/categories");
    };

    const categories = [
        { cod: 1, nom: "Comedy" },
        { cod: 2, nom: "Drama" },
        { cod: 3, nom: "Action" },
        { cod: 4, nom: "Horror" },
    ];


    const { idcategoria } = useParams();
    const [data, setData] = useState(initData);

    const onChangeNombre = (e) => {
        const nData = {...data, nom: e.target.value}
        setData(nData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando', data)
    };

    const setDataForm = (codigo) => {
        for (const item of categories) {
            if (item.cod === codigo) {
                console.log(item);
                const nData = {
                    cod: item.cod,
                    nom: item.nom
                }
                setData(nData);
                break;
            }
        }
    }
    
    useEffect(() => {
        setDataForm(idcategoria);
    }, [idcategoria]);

    /*const handleSubmit = (event) => {
        event.preventDefault();
    };*/

    return (
<div className="edit-category-container">
    <h3>Editar Categoría</h3>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="inputCategoryName" className="form-label">Nombre de la categoría</label>
            <input
                type="text"
                value={data.nom} 
                onChange={onChangeNombre}
                className="form-control input-styled"
                id="inputCategoryName"
            />
        </div>
        <div className="button-container">
            <button type="submit" className="btn btn-save">Guardar</button>
            <button 
                className="btn btn-cancel" 
                type="button" 
                onClick={() => navigate("/categories")}
            >
                Cancelar
            </button>
        </div>
    </form>
</div>
    );
}

export default CategoryFormPage;