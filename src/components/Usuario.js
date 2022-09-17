import { useState } from "react"


export default function Usuario(props) {
    const [nomePerfil, setNomePerfil] = useState(props.nomePerfil)
    const [imagemPerfil, setImagemPerfil] = useState(props.imagemPerfil)

    return (
        <div class="usuario">
            <img src={imagemPerfil} onClick={() => setImagemPerfil(prompt("Digite o link da sua imagem de perfil:"))} alt="Imagem perfil"/>
            <div class="texto">
                <strong>{props.username}</strong>
                <span>
                    {nomePerfil}
                    <ion-icon name="pencil" onClick={() => setNomePerfil(prompt("Digite o nome de exibição:"))}></ion-icon>
                </span>
            </div>
        </div>
    )
}