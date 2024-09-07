console.log(dados[7].titulo)
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    let resultados = ""
    let titulo = ""
    let descricao = ""
    let plataforma = ""
    let genero = ""
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nenhum resultado encontrado. </p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    if (campoPesquisa == "lista") {
        for (let dado of dados) {

            resultados +=
                ` 
            <div class="item-resultado">
            <h2>
                  <a href="#" target="_blank"> ${dado.titulo}</a>
            </h2>
            <div>
                <p>
                    Descrição: ${dado.descricao}
                </p>
            </div>
                <div>
                    <p>
                        <h3>Ano de lançamento: ${dado.lancamento}</h3> 
                    </p>
                </div>
                <div>
                    <p>
                        Genero: ${dado.genero}
                    </p>
                </div>
                <div>
                    <p>
                        Requisitos minimos: ${dado.specsmin}
                        <div>
                        Requsitos Recomendados:${dado.specsrec}
                        </div>
                    </p>
                </div>
                <div>
                    <p>
                        Quantidade de jogadores: ${dado.players}
                    </p>
                </div>
                <div>
                    <p>
                        Plataformas disponíveis: ${dado.plataforma}
                    </p>
                </div>
                <div>
                    <p>
                        
                    </p>
                </div>
                    <a href="${dado.link}" target="_blank"> Mais informações</a>
                </div>
                    
                `







        }
        
    }
    else {
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            plataforma = dado.plataforma.toLowerCase()
            genero = dado.genero.toLowerCase()

            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| plataforma.includes(campoPesquisa) || genero.includes(campoPesquisa))  {
                resultados +=
                    ` 
            <div class="item-resultado">
            <h2>
              <a href="#" target="_blank"> ${dado.titulo}</a>
            </h2>
            <div>
                <p>
                    Descrição: ${dado.descricao}
                </p>
            </div>
            <div>
                <p>
                    <h3>Ano de lançamento: ${dado.lancamento}</h3> 
                </p>
            </div>
            <div>
                <p>
                    Genero: ${dado.genero}
                </p>
            </div>
            <div>
                <p>
                    Requisitos minimos: ${dado.specsmin}
                    <div>
                    Requsitos Recomendados:${dado.specsrec}
                    </div>
                </p>
            </div>
            <div>
                <p>
                    Quantidade de jogadores: ${dado.players}
                </p>
            </div>
            <div>
                <p>
                    Plataformas disponíveis: ${dado.plataforma}
                </p>
            </div>
            <div>
                <p>
                    
                </p>
            </div>
                <a href="${dado.link}"target="_blank"> Mais informações</a>
            </div>
                
            `

                section.innerHTML = resultados




            }
        }
        if (!resultados) {
            section.innerHTML = "<p> Nenhum resultado encontrado </p>"
        }


    }
    section.innerHTML = resultados

}



