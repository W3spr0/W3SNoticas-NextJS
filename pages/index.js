const versions = [{number:'1', content:'teste'}, {number: '2', content:'teste2'}]
export default function Home(){
  return(
    <>
      <div className="container">
        {versions.map((version)=>{
          return(
            <div className="version">
              <h1>{version.number}</h1>
              <p>{version.content}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}