import HeaderComponent from "../components/HeaderComponent"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";

const initData = {
    cod:'',
    nom:'',
    cat:'',
}

function SerieFormPage(){

    const navigate = useNavigate();
    
    const gotoUrl = () => {
        navigate("/series");
    };
    
    const series = [
        {cod:1, nom:"Friends", cat:"Comedy", img:"friends.png"},
        {cod:2, nom:"Law & Order", cat:"Drama", img:"friends.png"},
        {cod:3, nom:"The Big Bang Theory", cat:"Comedy", img:"the-big-bang-theory.png"},
        {cod:4, nom:"Stranger Things", cat:"Horror", img:"stranger-things.png"},
        {cod:5, nom:"Dr. House", cat:"Drama", img:"dr-house.png"},
        {cod:6, nom:"The X-Files", cat:"Drama", img:"the-x-files.png"},
    ];

    const {idserie}= useParams();
    const [data, setData] = useState(initData);
    const onChangeNombre = (e) => {
        const nData = {...data, nom: e.target.value}
        setData(nData);
    };

    const onChangeCategoria = (e) => {
        const nData = {...data, cat: e.target.value}
        setData(nData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando', data)
    };


    const setDataForm = (codigo) => {
        for (const item of series) {
            if (item.cod === codigo) {
                console.log(item);
                const nData = {
                    cod: item.cod,
                    nom: item.nom,
                    cat: item.cat,
                    img: ''
                }
                setData(nData);
                document.getElementById("fileImg").src = "https://dummyimage.com/400x250/000/fff&text=" + item.img;
                break;
            }
        }
    }
    

    useEffect(() => {
        setDataForm(idserie);
    }, [idserie]);

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Nuevo - Serie</h3>
                </div>
                <form  onSubmit={handleSubmit} className="row">
                    <div className="col-md-4">
                        <img 
                            id="fileImg"
                            className="card-img-top" 
                            src={"https://dummyimage.com/400x250/000/fff"} 
                            alt="img" />
                    </div>
                    <div className="col-md-8">
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Nombre</label>
                            <input type="text" onChange={onChangeNombre} placeholder
                            className="form-control" id="inputName" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputCategory" className="form-label">Categoria</label>
                            <select onChange={onChangeCategoria} className="form-select" id="inputCategory" required >
                                <option value="">Seleccione una opción</option>
                                <option value="Horror">Horror</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputImage" className="form-label">Imagen</label>
                            <input type="file" className="form-control" id="inputImage"/>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary">Guardar</button>
                            <button type="button" onClick={gotoUrl} className="btn btn-secondary">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SerieFormPage
