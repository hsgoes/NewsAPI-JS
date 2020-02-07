let exibir = document.getElementById("mostrarNoticias")
let noticias = document.getElementById("noticias")

const API_KEY = "bab0ea18667645de9f777df7e4a6572e"

let config = {
    method: "GET"
}

function mostrarNaTela(listaNoticias) {
    console.log(listaNoticias)

    listaNoticias.forEach(element => {
        let imgSrc = element.urlToImage;
        let titulo = element.title;
        let descricao = element.description;
        let url = element.url;

        let corpoDaNoticia =
            `<div class="col-md-4">
        <div class="card">
            <img src="${imgSrc}" class="card-img-top"
                alt="...">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${descricao}</p>
                <a href="${url}" class="btn btn-primary">Ver notícia</a>
            </div>
        </div>
    </div>`

        noticias.insertAdjacentHTML("beforeend", corpoDaNoticia)
    });
}

exibir.onclick = () => {
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
        .then((resposta) => {
            return resposta.json()
        })
        .then(json => {
            let respostaAPI = json.articles;

            mostrarNaTela(respostaAPI)

        })
        .catch(function () {
            this.dataError = true;
        })
}
