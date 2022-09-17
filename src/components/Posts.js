import { useState } from "react"

function PostItem(props) {
    const [bookmark, setBookmark] = useState("bookmark-outline")
    const [like, setLike] = useState("heart-outline")
    const color = (like === "heart" ? {color: 'red'} : {})
    const contadorLikes = ~~props.contadorLikes + ~~(like === "heart")

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemPerfil} alt="Imagem perfil" />
                    {props.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagemPost} onClick={() => setLike(like === "heart-outline" ? "heart" : "heart-outline")} alt="Imagem post" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={like} style={color} onClick={() => setLike(like === "heart-outline" ? "heart" : "heart-outline")}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={bookmark} onClick={() => setBookmark(bookmark === "bookmark-outline" ? "bookmark" : "bookmark-outline")}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemLikePrincipal} alt="Imagem perfil" />
                    <div class="texto">
                        Curtido por <strong>{props.usernameLikePrincipal}</strong> e <strong>outras {contadorLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {
    const posts = [
        { username: "meowed", imagemPerfil: "assets/img/meowed.svg", imagemPost: "assets/img/gato-telefone.svg", usernameLikePrincipal: "respondeai", imagemLikePrincipal: "assets/img/respondeai.svg", contadorLikes: 101523 },
        { username: "barked", imagemPerfil: "assets/img/barked.svg", imagemPost: "assets/img/dog.svg", usernameLikePrincipal: "adorable_animals", imagemLikePrincipal: "assets/img/adorable_animals.svg", contadorLikes: 99159 }
    ]

    return (
        <div class="posts">
            {posts.map((p) =>
                <PostItem
                    username={p.username}
                    imagemPerfil={p.imagemPerfil}
                    imagemPost={p.imagemPost}
                    usernameLikePrincipal={p.usernameLikePrincipal}
                    imagemLikePrincipal={p.imagemLikePrincipal}
                    contadorLikes={(p.contadorLikes)}
                />
            )}
        </div>
    )
}