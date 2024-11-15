import HeaderComponent from "../components/HeaderComponent"
import SerieComponent from "../components/SerieComponent"
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react"; 
import axios from "axios";
import { Link} from "react-router-dom";

function SeriePage() {

    const urlApi = 'http://localhost:8000/serie';

    const [series, setSeries] = useState([]);
    const loadData = async () => {
        try {
            const response = await axios.get(urlApi);
            console.log(response.data); 
            setSeries(response.data); 
        } catch (error) {
            console.error("Error al cargar las series:", error);
        }
    };
    useEffect(() => {
        loadData();
    }, []); 

/*function SeriePage(){
    const series = [
        {cod:1, nom:"Friends", cat:"Comedy", img:"friends.png"},
        {cod:2, nom:"Law & Order", cat:"Drama", img:"law-and-order.png"},
        {cod:3, nom:"The Big Bang Theory", cat:"Comedy", img:"the-big-bang.png"},
        {cod:4, nom:"Stranger Things", cat:"Horror", img:"stranger-things.png"},
        {cod:5, nom:"Dr. House", cat:"Drama", img:"dr-house.png"},
        {cod:6, nom:"The X-Files", cat:"Drama", img:"the-x-files.png"},
      ];
      */

      return (
        <>
            <HeaderComponent />
            <div className="container mt-3">

                <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                <h3>Series</h3>
                        <div>
                            <Link className="btn btn-primary" to="/series/new">Nuevo</Link>
                        </div>
                </div>
                <div className="row">
                    {series.map((serie)=>(
                    <div key={serie.cod} className="col-md-3 mb-3">
                        <SerieComponent
                        	codigo={serie.cod}
                        	nombre={serie.nom}
                        	categoria={serie.cat}
                        	imagen={serie.img}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </>
      )
}

export default SeriePage
