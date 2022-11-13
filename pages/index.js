const noticias = [
  {
    categoria:"Tecnologia", 
    titulo:"GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários", 
    desc:"A receita anual do GitHub atingiu a marca de US$ 1 bilhão",
    data: "Publicado em 26/10/2022",
    imgsrc: "https://tm.ibxk.com.br/2022/10/26/26121643272303.jpg"
  },
  {
    categoria:"Tecnologia", 
    titulo:"Por que Bill Gates está investindo tanto em terras agrícolas?", 
    desc:"Isso porque no ano pasado foi considerado o maior proprietário privado de terras rurais dos EUA.",
    data: "Publicado: Hoje",
    imgsrc:"https://tm.ibxk.com.br/2022/10/28/28000056495002.jpg?ims=140x88"
  } 

]
export default function Home(){
  return(
    <>
      <div className="container">
      <div className="container-right">
            <ul>
                <li><h2 className="right-title">Sobre</h2></li>
                <li>Esta pagina foi criada do zero por <a href="https://github.com/W3spr0">W3spr0</a>, baseada em varias paginas de noticia. As informações das postagens foram retiradas da pagina <a href="https://www.tecmundo.com.br/" target="_blank" rel="noopener noreferrer">tecmundo</a></li>
                <li className="img"><img src="https://avatars.githubusercontent.com/u/104312855?v=4" alt=""/></li>
            </ul>
            <ul>
                <li>Este projeto é apenas um teste</li>
            </ul>
        </div>
        <div className="noticias">
          {noticias.map((noticia) =>{
            return(
              <div className="postagem">
                <div className="postagem-img">
                  <img src={noticia.imgsrc} alt=""/></div>
                  <div className="postagem-texto">
                      <p className="postagem-categoria">{noticia.categoria}</p>
                      <h2><a href="noticia1.html">{noticia.titulo}</a></h2>
                      <p>{noticia.desc}</p>
                      <p class="postagem-data">{noticia.data}</p>
                  </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}