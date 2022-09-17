

export default function Usuario(props) {
    // TODO Edição do nome de exibição
    return (
        <div class="usuario">
            <img src={props.imagemPerfil} alt="Imagem perfil"/>
            <div class="texto">
                <strong>{props.username}</strong>
                <span>
                    {props.nomePerfil}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}