import { useState } from "react";
import styles from "./Perfil.css";
function Perfil({nome, idade}){


    return(
        <div class="card">
            
            <p className="cardTitle">  Nome: {nome}</p>
            <p className="cardSubtitle"> Idade: {idade}</p>
        </div>
    );
}

export default Perfil;